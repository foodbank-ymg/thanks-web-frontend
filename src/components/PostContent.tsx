'use client'

import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import BackButtonWhite from '@/components/BackButtonWhite'
import HeroPost from '@/components/HeroPost'
import { classNames } from '@/lib/classNames'
import { Post } from '@/types/Post'

export type PostWithNeighbor = Post & {
  index: number
}

const PostContent = ({ id, posts }: { id: string; posts: Post[] }) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  let initialPost: PostWithNeighbor = {
    id: '',
    createdAt: '',
    recipientGroupName: '',
    subject: '',
    body: '',
    images: [],
    index: -1,
  }
  posts.forEach((p, idx) => {
    if (p.id === id) {
      initialPost = {
        ...p,
        index: idx,
      }
    }
  })

  const allPosts = posts.map((p, idx) => {
    return {
      ...p,
      index: idx,
    }
  })

  const [post, setPost] = useState<PostWithNeighbor>(initialPost)

  const [isDirect, setIsDirect] = useState<boolean>(false)
  useEffect(() => {
    console.log(`direct: ${searchParams.get('direct')}`)
    setIsDirect(searchParams.get('direct') || '' ? true : false)
  }, [searchParams])

  const moves = [
    {
      label: '前のおたより',
      arrowImage: '/img/arrow_right.svg',
      arrowRotate: 'rotate-180',
      arrowShift: 'mr-1',
      onClick: (post: PostWithNeighbor, isDirect: boolean) => {
        if (post.index === 0) {
          return
        }
        if (allPosts && post.index > 0) {
          router.replace(`/post/${allPosts[post.index - 1].id}${isDirect ? '?direct=1' : ''}`)
          setPost(allPosts[post.index - 1])
        }
      },
      disabled: (post: PostWithNeighbor) => !allPosts || post.index === 0,
    },
    {
      label: '次のおたより',
      arrowImage: '/img/arrow_right.svg',
      arrowRotate: '',
      arrowShift: 'ml-1',
      onClick: (post: PostWithNeighbor, isDirect: boolean) => {
        router.replace(`/post/${allPosts[post.index + 1].id}${isDirect ? '?direct=1' : ''}`)
        setPost(allPosts[post.index + 1])
      },
      disabled: (post: PostWithNeighbor) => !allPosts || post.index === allPosts?.length - 1,
    },
  ]

  return (
    <>
      <HeroPost bgUrl={post.images[0]} />
      <div className='relative pb-[24px] md:pb-[32px]'>
        <div className='rounded-b-common bg-mywhite pb-common drop-shadow-[0_4px_4px_rgba(0,0,0,0.05)] md:drop-shadow-[0_13px_13px_rgba(0,0,0,0.05)]'>
          <div className='mx-auto mb-[48px] flex max-w-screen-md flex-col items-center rounded-b-common px-4 lg:px-0'>
            {/* 見出しエリア */}
            <p className='text-myyellow'>{post.recipientGroupName}</p>
            <h1 className='text-h my-[16px] break-words px-[24px] text-center lg:whitespace-nowrap'>
              {post.subject}
            </h1>
            <p className='text-mygray'>{post.createdAt}</p>
            {/* 本文エリア */}
            <p className='w-full py-8 text-left lg:py-16'>{post.body}</p>
            {/* 画像エリア */}
            <div className='relative flex min-h-[320px] w-full min-w-[320px] justify-center md:min-h-[480px] md:min-w-[480px]'>
              <Image src={post.images[0]} fill alt='' className='object-contain' />
            </div>
          </div>
        </div>
        <div className='absolute bottom-0 flex w-full justify-center'>
          {!isDirect && <BackButtonWhite label='一覧へもどる' />}
        </div>
      </div>
      <div className='mx-auto my-[40px] flex max-w-[300px] justify-between px-0 md:my-[60px] md:max-w-screen-md md:px-[16px]'>
        {moves.map((move, idx) => (
          <div
            key={idx}
            className={classNames(
              'flex flex-col items-center gap-[10px] opacity-100 md:gap-[20px] md:opacity-30',
              move.disabled(post) ? 'invisible' : 'cursor-pointer hover:opacity-100',
              idx === 0 ? 'md:flex-row' : 'md:flex-row-reverse',
            )}
            onClick={() => {
              if (move.disabled(post)) {
                return
              }
              move.onClick(post, isDirect)
            }}
          >
            <div className='flex size-[60px] items-center justify-center rounded-full border-[3px] border-mybrown'>
              <Image
                src='/img/arrow_right.svg'
                width='24'
                height='24'
                alt=''
                className={`${move.arrowShift} ${move.arrowRotate}`}
              />
            </div>
            <p className='text-h'>{move.label}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default PostContent
