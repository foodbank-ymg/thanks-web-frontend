import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

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

  const [isDirect, setIsDirect] = useState<boolean>(false)
  useEffect(() => {
    if (!router.isReady) {
      return
    }
    setIsDirect(router.query.direct || '' ? true : false)
  }, [router])

  return (
    <>
      <div className=''>
        <HeroPost bgUrl={post.images[0]} />

        {/* 投稿 */}
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
            {!isDirect && <LinkButtonWhite label='一覧へもどる' onClick={() => router.back()} />}
          </div>
        </div>

        {/* 前後リンク */}
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
