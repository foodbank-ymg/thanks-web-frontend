import '@/styles/globals.css'
import { Metadata } from 'next'
import { Zen_Maru_Gothic } from 'next/font/google'
import { Suspense } from 'react'

import Footer from '@/components/Footer'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import Header from '@/components/Header'
import Menu from '@/components/Menu'
import { classNames } from '@/lib/classNames'
import { SEO_DEFAULT } from '@/lib/seo'

const zenMaruGothic = Zen_Maru_Gothic({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-zenmaru',
})

export const metadata: Metadata = SEO_DEFAULT

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='ja' className={classNames(zenMaruGothic.variable, 'fonts-sans')}>
      <Suspense fallback={<></>}>
        <GoogleAnalytics />
      </Suspense>
      {/* 全体共通フォント設定（強調や見出しのみにフォントを上書き） */}
      <body className='palt bg-myyellowpale bg-texture font-zenmaru text-[16px] text-mybrown'>
        <main className='relative'>
          {/* 固定ヘッダー */}
          <div className='static z-50 w-full lg:fixed'>
            <Header />
          </div>
          {children}
          <Footer />
          {/* 固定メニュー  */}
          <div className='fixed bottom-0 left-0 z-50 w-full lg:hidden'>
            <Menu />
          </div>
        </main>
      </body>
    </html>
  )
}
