import { GetStaticProps } from 'next'
import React from 'react'

import Calendars from '@/components/Calendars'
import HeroRect from '@/components/HeroRect'
import PostList from '@/components/PostList'
import { GetApprovedPosts } from '@/data/posts'
import { Post } from '@/types/Post'

const LATEST_POSTS_QUANTITY = 30

type Props = {
  posts: Post[]
  yearMonthsList: YearMonths[]
}

const LatestPostsPage = ({ posts, yearMonthsList }: Props) => {
  return (
    <>
      <HeroRect>
        <div className='h-[300px] bg-mygray' />
      </HeroRect>
      <PostList posts={posts} />
      <Calendars yearMonthsList={yearMonthsList} />
    </>
  )
}

export default LatestPostsPage

export const getStaticProps: GetStaticProps = async () => {
  // 投稿データ
  let posts_ = await GetApprovedPosts()
  const posts = posts_.slice(0, Math.min(posts_.length, LATEST_POSTS_QUANTITY))

  // カレンダー年月
  const yearMonthsList: YearMonths[] = []
  posts.forEach((post) => {
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
