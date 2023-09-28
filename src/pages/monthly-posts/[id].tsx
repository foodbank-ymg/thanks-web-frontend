import moment from 'moment'
import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'

import Calendars from '@/components/Calendars'
import HeroRect from '@/components/HeroRect'
import Month from '@/components/Month'
import PostList from '@/components/PostList'
import { GetApprovedPosts } from '@/data/posts'
import { biuldYearMonthsList } from '@/lib/posts'
import { Post } from '@/types/Post'
import { YearMonths } from '@/types/YearMonths'

type Props = {
  monthlyPath: string
  prevMonthlyPath: string
  nextMonthlyPath: string
  posts: Post[]
  yearMonthsList: YearMonths[]
}

const MonthlyPostsPage = (props: Props) => {
  return (
    <div>
      <HeroRect bgUrl="bg-[url('/img/hero-post-bg.jpg')]">
        <div className='text-center'>
          <h1 className='text-hb mb-[16px]'>これまでのおたより</h1>
          <div className='flex flex-col justify-center md:flex-row'>
            <p>みなさまから届いた</p>
            <p>大切なおたよりを、</p>
            <p>月ごとにまとめています。</p>
          </div>
          <div className='flex flex-col justify-center md:flex-row'>
            <p>ぜひ、あなたあてのおたよりを</p>
            <p>見つけてみてください。</p>
          </div>
        </div>
      </HeroRect>
      <div className='pt-2h'>
        <Month
          monthlyPath={props.monthlyPath}
          prevYearMonth={props.prevMonthlyPath}
          nextYearMonth={props.nextMonthlyPath}
        />
      </div>
      <div className='pt-h'>
        <PostList posts={props.posts} />
      </div>
      <Calendars yearMonthsList={props.yearMonthsList} />
    </div>
  )
}

export default MonthlyPostsPage

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let monthlyPath = params?.id as string
  console.log(`monthlyPath: ${monthlyPath}`)
  // 投稿データ
  let posts_ = await GetApprovedPosts()

  // 年月指定のないパスは、当月ではない最初の投稿を対象とする（だいたい先月になるはず）
  if (monthlyPath === 'latest') {
    const nowAt = moment(new Date()).format('YYYY.MM.DD')
    const prev = posts_.find((post) => {
      return dateToPath(post.createdAt) !== dateToPath(nowAt)
    })
    if (prev) {
      monthlyPath = dateToPath(prev.createdAt)
    }
  }

  // 月別の投稿
  const posts = posts_.filter((post) => {
    return dateToPath(post.createdAt) === monthlyPath
  })
  // 年月指定がない

  // カレンダー年月
  const yearMonthsList: YearMonths[] = biuldYearMonthsList(posts_)
  let prevMonthlyPath = ''
  let nextMonthlyPath = ''
  let prevCandidate = ''
  let nextSetFlag = false
  yearMonthsList.forEach((yearMonth) => {
    yearMonth.months.forEach((month) => {
      // 当月
      if (numberToPath(yearMonth.year, month) === monthlyPath) {
        // 先月候補があればセット
        if (prevCandidate) {
          prevMonthlyPath = prevCandidate
        }
        nextSetFlag = true
      } else {
        // 先月候補を覚えておく
        prevCandidate = numberToPath(yearMonth.year, month)
        // 当月の直後に次月をセット
        if (nextSetFlag) {
          nextMonthlyPath = numberToPath(yearMonth.year, month)
          nextSetFlag = false
        }
      }
    })
  })

  return {
    props: {
      monthlyPath,
      prevMonthlyPath,
      nextMonthlyPath,
      posts,
      yearMonthsList,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  // 年月指定のないパス（メニューやフッターのリンク）も候補として入れておく
  const yearMonths: string[] = ['latest']
  let posts = await GetApprovedPosts()
  posts.forEach((post) => {
    const path = dateToPath(post.createdAt)
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

export const dateToPath = (date: string): string => {
  return date.split('.').slice(0, 2).join('-')
}

export const numberToPath = (year: number, month: number): string => {
  return `${year}-${month}`
}
