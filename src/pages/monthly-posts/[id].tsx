import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'

import PostList from '@/components/PostList'
import { samplePosts } from '@/data/samplePosts'
import { Post } from '@/types/Post'

type Props = {
  posts: Post[]
}

const MonthlyPostsPage = ({ posts }: Props) => {
  return (
    <div>
      <PostList posts={posts} />
    </div>
  )
}

export default MonthlyPostsPage

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string

  const posts = samplePosts.filter((post) => {
    return buildMonthlyPath(post.createdAt) === id
  })

  return {
    props: {
      posts,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const yearMonths: string[] = []
  samplePosts.forEach((post) => {
    const path = buildMonthlyPath(post.createdAt)
    if (!yearMonths.includes(path)) {
      yearMonths.push(path)
    }
  })

  const paths = yearMonths.map((month) => {
    return {
      params: {
        id: month,
      },
    }
  })

  return {
    paths: paths,
    fallback: false,
  }
}

export const buildMonthlyPath = (date: string): string => {
  return date.split('.').slice(0, 2).join('-')
}
