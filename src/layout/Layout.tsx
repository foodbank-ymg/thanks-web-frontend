import { NextSeo } from 'next-seo'
import React from 'react'

import Footer from '@/components/Footer'
import Header from '@/components/Header'

type Props = {
  children: React.ReactElement
}

const title = 'フードバンク山口ありがとうWebsite'
const description =
  'フードバンク山口を利用された方からの「ありがとう」の気持ちを集めたWebサイトです。現在開発中です。'
const url = 'https://thankyou.fbyamaguchi.org/'

const Layout = ({ children }: Props) => (
  <>
    <NextSeo
      title='フードバンク山口ありがとうWebsite'
      description={title}
      openGraph={{
        type: 'website',
        url: 'https://thankyou.fbyamaguchi.org/',
        title: title,
        description: description,
        images: [
          {
            url: `${url}ogp.jpg`,
            width: 1200,
            height: 630,
            alt: '',
          },
        ],
        site_name: title,
      }}
    />
    <main className='mx-auto max-w-main'>
      {/* 固定ヘッダー */}
      <div className='static z-50 w-full max-w-main md:fixed'>
        <Header />
      </div>
      {children}
      <Footer />
    </main>
  </>
)

export default Layout
