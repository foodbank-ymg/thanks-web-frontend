import { GetStaticProps } from 'next'
import React from 'react'

import PostList from '@/components/PostList'
import { GetApprovedPosts } from '@/data/posts'
import { Post } from '@/types/Post'

const LATEST_POSTS_QUANTITY = 30

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
  let posts_ = await GetApprovedPosts()
  const posts = posts_.slice(0, Math.min(posts_.length, LATEST_POSTS_QUANTITY))

  return {
    props: {
      posts,
    },
  }
}
