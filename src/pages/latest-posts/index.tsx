import { GetStaticProps } from 'next'
import React from 'react'

import Calendars from '@/components/Calendars'
import HeroRect from '@/components/HeroRect'
import PostList from '@/components/PostList'
import { GetApprovedPosts } from '@/data/posts'
import { biuldYearMonthsList } from '@/lib/posts'
import { Post } from '@/types/Post'
import { YearMonths } from '@/types/YearMonths'

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
      <div className='pt-2h text-center'>
        <h1 className='text-hb'>最近のおたより {LATEST_POSTS_QUANTITY}件</h1>
      </div>
      <div className='pt-h'>
        <PostList posts={posts} />
      </div>
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
  const yearMonthsList: YearMonths[] = biuldYearMonthsList(posts_)

  return {
    props: {
      posts,
      yearMonthsList,
    },
  }
}
