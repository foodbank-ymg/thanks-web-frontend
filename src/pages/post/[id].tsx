import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import { samplePosts } from '@/data/samplePosts'
import { Post } from '@/types/Post'

type PostWithNeighbor = Post & {
  index: number
}

type Props = {
  initialPost: PostWithNeighbor
}

const PostPage = ({ initialPost }: Props) => {
  const router = useRouter()

  const [post, setPost] = useState<PostWithNeighbor>(initialPost)

  const [allPosts, setAllPosts] = useState<PostWithNeighbor[] | null>(null)
  useEffect(() => {
    const posts = samplePosts.map((p, idx) => {
      return {
        ...p,
        index: idx,
      }
    })
    setAllPosts(posts)
  }, [])

  return (
    <div className='container mx-auto max-w-screen-md'>
      <div>
        <h1>{post.subject}</h1>
        <p>{post.createdAt}</p>
        <p>{post.body}</p>
        <Image src={post.images[0]} alt='' width={360} height={360} />
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
    </div>
  )
}

export default PostPage

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string

  let post: Post = {
    id: '',
    subject: '',
    body: '',
    images: [],
    createdAt: '',
  }
  let index: number = 0
  samplePosts.forEach((p, idx) => {
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
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = samplePosts.map((post) => {
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
