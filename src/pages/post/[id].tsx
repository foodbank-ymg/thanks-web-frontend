import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeroLetter from '@/components/HeroLetter'
import HeroPost from '@/components/HeroPost'
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
    <>
      <Head>
        <title>フードバンク山口ありがとうWeb</title>
        <meta
          name='description'
          content='フードバンク山口の活動をお知らせるWebサイトです。現在開発中です。'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main className='mx-auto max-w-[1280px]'>
        {/* 固定ヘッダー */}
        <div className='fixed z-50 w-full max-w-[1280px]'>
          <Header />
        </div>

        <HeroPost />

        {/* 投稿 */}
        <div className='mx-auto max-w-screen-md'>
          <div className='mx-auto rounded-b-[20px] bg-mywhite px-4 text-center font-body text-mybrown lg:px-0'>
            <p className='text-myyellow'>{post.recipientGroupName}</p>
            <h1 className='my-4 break-words text-mposthead lg:whitespace-nowrap lg:text-posthead'>
              {post.subject}
            </h1>
            <p className=' text-mygray'>{post.createdAt}</p>

            <p className='mx-auto w-full py-8 text-left lg:py-16'>{post.body}</p>

            <div className='mx-auto flex h-[224px] w-[224px] justify-center lg:h-[370px] lg:w-[370px]'>
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

        {/* 前後リンク */}
        <div className='flex flex-col bg-myyellowpale'>
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

        <div className='bg-myyellowpale'>
          <Footer />
        </div>
      </main>
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
