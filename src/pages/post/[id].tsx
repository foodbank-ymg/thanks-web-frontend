import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import { GetApprovedPosts } from '@/data/posts'
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

  return (
    <div className='container mx-auto max-w-screen-md'>
      <div className='h-[360px] bg-gray-500'>Hero</div>
      <div className='mx-auto  bg-white text-center font-body text-mybrown'>
        <h1 className='break-words text-desc lg:whitespace-nowrap lg:text-mlabel'>
          {post.subject}
        </h1>
        <p className='mt-8 mb-16 text-myyellow'>{post.recipientGroupName}</p>
        <p className='mx-auto mb-16 w-full break-words'>{post.body}</p>
        <p className='mt-8 mb-16 text-gray-400'>{post.createdAt}</p>
        <div className='flex justify-center'>
          <Image
            src='/img/post-sample.webp'
            width='200'
            height='200'
            alt='logo'
            className='w-1/2'
          />
        </div>
      </div>
      <div className='flex flex-col'>
        <button onClick={() => router.back()}>一覧へもどる</button>
        <button
          onClick={() => {
            if (allPosts && post.index > 0) {
              router.replace(`/post/${allPosts[post.index - 1].id}`)
              setPost(allPosts[post.index - 1])
            }
          }}
          disabled={allPosts ? post.index === 0 : true}
        >
          前の記事
        </button>
        <button
          onClick={() => {
            if (allPosts && post.index < allPosts.length - 1) {
              router.replace(`/post/${allPosts[post.index + 1].id}`)
              setPost(allPosts[post.index + 1])
            }
          }}
          disabled={allPosts ? post.index === allPosts?.length - 1 : true}
        >
          次の記事
        </button>
      </div>
      {/* <div>
        <h1>{post.subject}</h1>
        <p>{post.createdAt}</p>
        <p>{post.body}</p>
        <Image src={post.images[0]} alt='' width={360} height={360} />
      </div>
       */}
    </div>
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
