import Head from 'next/head'

import Footer from '@/components/Footer'
import Letter from '@/components/Letter'
import Topabout from '@/components/Topabout'

export default function Home() {
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
        <Topabout />

        <Footer />
      </main>
    </>
  )
}
