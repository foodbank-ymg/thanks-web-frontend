import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import Calendars from '@/components/Calendars'
import Footer from '@/components/Footer'
import Letter from '@/components/Letter'
import Postcard from '@/components/Postcard'
import Topabout from '@/components/Topabout'
import { GetPosts } from '@/data/posts'
import { buildMonthlyPath } from '@/pages/monthly-posts/[id]'
import { Post } from '@/types/Post'

type Props = {
  latestMonthlyPath: string
  posts: Post[]
}

const HomePage = ({ latestMonthlyPath, posts }: Props) => {
  return (
    <>
      <Head>
        <title>フードバンク山口ありがとうWeb</title>
        <meta
          name='description'
          content='フードバンク山口の活動をお知らせるWebサイトです。現在開発中です。'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main>
        {/* ヘッダー */}
        {/* ヒーローセクション */}
        <div className='h-[160px] bg-red-50'>
          <h1 id='title' className='text-2xl'>
            ヘッダー/ヒーローセクション
          </h1>
        </div>
        <Letter />

        <div className='h-[160px] bg-blue-50'>
          <p>最近のおたよりセクション</p>
          <Postcard posts={posts} index={0} />
          <Link href='/latest-posts' className='rounded-full border border-mybrown'>
            もっとおたよりを見る
          </Link>
        </div>

        <div className='h-[160px] bg-green-50'>
          <p>月ごとのおたよりセクション</p>
          <Link
            href={`/monthly-posts/${latestMonthlyPath}`}
            className='rounded-full border border-mybrown'
          >
            もっとおたよりを見る
          </Link>
        </div>

        <Topabout />

        <div className='py-[40px]'>
          <Calendars />
        </div>
        <Footer />
      </main>
    </>
  )
}

export default HomePage

export const getStaticProps: GetStaticProps = async () => {
  // 現在時刻の月ではない直近投稿が直近の月次ページ
  const now = new Date()
  const nowMonth = buildMonthlyPath(`${now.getFullYear()}-${now.getMonth() + 1}`)

  let latestMonthlyPath = ''
  let posts = await GetPosts()
  posts.forEach((post) => {
    const postMonthlyPath = buildMonthlyPath(post.createdAt)
    if (latestMonthlyPath === '' && postMonthlyPath !== nowMonth) {
      latestMonthlyPath = postMonthlyPath
    }
  })

  return {
    props: {
      latestMonthlyPath,
      posts,
    },
  }
}
