import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeroRect from '@/components/HeroRect'
import Topabout from '@/components/Topabout'

const AboutPage = () => {
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

      <main className='mx-auto max-w-[1280px]'>
        {/* 固定ヘッダー */}
        <div className='fixed z-50 w-full max-w-[1280px]'>
          <Header />
        </div>

        {/* ヒーローセクション */}
        <HeroRect>
          <h1 className='flex w-[400px] max-w-[400px] flex-col'>
            <div className='relative h-[100px] w-[400px]'>
              <Image
                src='/img/logo_normal.svg'
                width='400'
                height='100'
                alt=''
                className='absolute z-20 h-full w-full'
              />
              <Image
                src='/img/logo_alt.svg'
                width='400'
                height='110'
                alt=''
                className='absolute z-20 h-full w-full'
              />
            </div>
            <p>について</p>
          </h1>
        </HeroRect>

        <Topabout />

        <div className='h-[480px] bg-myyellowpale'></div>

        <Footer />
      </main>
    </>
  )
}

export default AboutPage
