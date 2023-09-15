import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeroPost from '@/components/HeroPost'
import LinkButtonWhite from '@/components/LinkButtonWhite'
import { GetApprovedPosts } from '@/data/posts'
import { classNames } from '@/lib/classNames'
import { Post } from '@/types/Post'

type PostWithNeighbor = Post & {
  index: number
}

type Props = {
  initialPost: PostWithNeighbor
  allPosts: PostWithNeighbor[]
}

const PostPage = ({ initialPost, allPosts }: Props) => {
  const router = useRouter()

  const [post, setPost] = useState<PostWithNeighbor>(initialPost)

  const moves = [
    {
      label: '前のおたより',
      arrowImage: '/img/arrow_right.svg',
      arrowRotate: 'rotate-180',
      arrowShift: 'mr-1',
      onClick: (post: PostWithNeighbor) => {
        if (post.index === 0) {
          return
        }
        if (allPosts && post.index > 0) {
          router.replace(`/post/${allPosts[post.index - 1].id}`)
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
      onClick: (post: PostWithNeighbor) => {
        router.replace(`/post/${allPosts[post.index + 1].id}`)
        setPost(allPosts[post.index + 1])
      },
      disabled: (post: PostWithNeighbor) => !allPosts || post.index === allPosts?.length - 1,
    },
  ]

  return (
    <>
      <div className='mx-auto max-w-main'>
        {/* 固定ヘッダー */}
        <div className='fixed z-50 w-full max-w-main'>
          <Header />
        </div>

        <HeroPost />

        {/* 投稿 */}
        <div className='relative pb-[24px] md:pb-[32px]'>
          <div className='rounded-b-common bg-mywhite pb-common drop-shadow-[0_4px_4px_rgba(0,0,0,0.05)] md:drop-shadow-[0_13px_13px_rgba(0,0,0,0.05)]'>
            <div className='mx-auto flex max-w-screen-md flex-col items-center rounded-b-common px-4 lg:px-0'>
              {/* 見出しエリア */}
              <p className='text-myyellow'>{post.recipientGroupName}</p>
              <h1 className='text-h my-[16px] break-words px-[24px] text-center lg:whitespace-nowrap'>
                {post.subject}
              </h1>
              <p className='text-mygray'>{post.createdAt}</p>
              {/* 本文エリア */}
              <p className='w-full py-8 text-left lg:py-16'>{post.body}</p>
              {/* 画像エリア */}
              <div className='max-h-[370px] min-h-[224px] min-w-[224px] max-w-[370px] pb-[48px]'>
                <Image
                  src={post.images[0]}
                  width={370}
                  height={370}
                  alt=''
                  className='object-cover'
                />
              </div>
            </div>
          </div>
          <div className='absolute bottom-0 flex w-full justify-center'>
            <LinkButtonWhite label='一覧へもどる' onClick={() => router.back()} />
          </div>
        </div>

        {/* 前後リンク */}
        <div className='mx-auto my-[40px] flex max-w-[300px] justify-between px-0 md:my-[60px] md:max-w-screen-md md:px-[16px]'>
          {moves.map((move, idx) => (
            <div
              key={idx}
              className={classNames(
                'flex flex-col items-center gap-[10px] opacity-30 md:flex-row md:gap-[20px]',
                !move.disabled(post) && 'cursor-pointer hover:opacity-100',
              )}
              onClick={() => {
                if (move.disabled(post)) {
                  return
                }
                move.onClick(post)
              }}
            >
              <div className='flex h-[60px] w-[60px] items-center justify-center rounded-full border-[3px] border-mybrown'>
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

        <div className='bg-myyellowpale'>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default PostPage

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string

  let post: Post = {
    id: '',
    recipientGroupName: '',
    subject: '',
    body: '',
    images: [],
    createdAt: '',
  }
  let index: number = 0
  let posts = await GetApprovedPosts()
  posts.forEach((p, idx) => {
    if (p.id === id) {
      post = p
      index = idx
    }
  })

  return {
    props: {
      initialPost: {
        ...post,
        index: index,
      },
      allPosts: posts.map((p, idx) => {
        return {
          ...p,
          index: idx,
        }
      }),
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  let posts = await GetApprovedPosts()
  const paths = posts.map((post) => {
    return {
      params: {
        id: post.id,
      },
    }
  })

  return {
    paths: paths,
    fallback: false,
  }
}
