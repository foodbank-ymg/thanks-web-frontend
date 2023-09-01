import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'

import Calendars from '@/components/Calendars'
import HeroRect from '@/components/HeroRect'
import PostList from '@/components/PostList'
import { GetApprovedPosts } from '@/data/posts'
import { Post } from '@/types/Post'

type Props = {
  posts: Post[]
  yearMonthsList: YearMonths[]
}

const MonthlyPostsPage = ({ posts, yearMonthsList }: Props) => {
  return (
    <div>
      <HeroRect>
        <div className='h-[300px] bg-mygray' />
      </HeroRect>
      <PostList posts={posts} />
      <Calendars yearMonthsList={yearMonthsList} />
    </div>
  )
}

export default MonthlyPostsPage

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string

  // 投稿データ
  let posts_ = await GetApprovedPosts()
  // 月別の投稿
  const posts = posts_.filter((post) => {
    return buildMonthlyPath(post.createdAt) === id
  })

  // カレンダー年月
  const yearMonthsList: YearMonths[] = []
  posts_.forEach((post) => {
    // e.g. 2023.9.1, 2023.10.31
    const numbers = post.createdAt.split('.')
    // 投稿の年
    const year = Number(numbers[0])
    let yearMonths = yearMonthsList.find((current) => current.year === year)
    if (!yearMonths) {
      yearMonths = {
        year,
        months: [],
      }
      // 新しい年は後尾に追加（降順になる）
      yearMonthsList.push(yearMonths)
    }
    // 投稿の月
    const month = Number(numbers[1])
    if (!yearMonths.months.includes(month)) {
      // 新しい月は先頭に追加（昇順になる）
      yearMonths.months.unshift(month)
    }
  })

  return {
    props: {
      posts,
      yearMonthsList,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const yearMonths: string[] = []
  let posts = await GetApprovedPosts()
  posts.forEach((post) => {
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
