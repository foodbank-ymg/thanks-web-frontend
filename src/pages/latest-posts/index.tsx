import { GetStaticProps } from 'next'
import React from 'react'

import PostList from '@/components/PostList'
import { samplePosts } from '@/data/samplePosts'
import { Post } from '@/types/Post'

const LATEST_POSTS_QUANTITY = 9

type Props = {
  posts: Post[]
}

const LatestPostsPage = ({ posts }: Props) => {
  return (
    <div>
      <PostList posts={posts} />
    </div>
  )
}

export default LatestPostsPage

export const getStaticProps: GetStaticProps = async () => {
  // 仮データ（後でDBデータに差し替え）
  const posts = samplePosts.slice(0, Math.min(samplePosts.length, LATEST_POSTS_QUANTITY))

  return {
    props: {
      posts,
    },
  }
}
