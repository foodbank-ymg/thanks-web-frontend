import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='m-[16px] flex h-auto flex-col gap-8 whitespace-nowrap rounded-[5vw] bg-mybrown p-[32px] text-mywhite md:relative md:m-[32px] md:h-[280px] md:flex-row'>
      {/* ロゴ */}
      <div className='static left-[5vw] top-[40px] w-[280px] text-center md:absolute lg:w-[480px] lg:text-left'>
        <Image src='/img/logo_normal.svg' width='480' height='0' alt='ありがとうWebsiteロゴ' />
      </div>
      {/* サイト内リンク */}
      <div className='flex flex-col gap-y-4 md:absolute md:bottom-[50%] md:right-[5vw] md:translate-y-[50%] lg:ml-auto'>
        <Link href='/latest-posts'>
          <span className='mr-2'>▶</span>最近のお便り
        </Link>
        <Link href='/monthly-posts/latest' className=''>
          <span className='mr-2'>▶</span>これまでのお便り
        </Link>
        <Link href='/about'>
          <span className='mr-2'>▶</span>ありがとうWebsiteについて
        </Link>
        <Link href='https://fbyamaguchi.org/'>
          <span className='mr-2'>▶</span>フードバンク山口公式サイト
        </Link>
      </div>
      {/* 連絡先 */}
      <div className='static left-[5vw] bottom-[40px] text-center md:absolute md:text-left'>
        <p className='text-[18px]'>特定非営利法人&nbsp;フードバンク山口</p>
        <div className='pt-4'>
          <p>山口市黒川1159-13</p>
          <div className='flex flex-col justify-start md:flex-row'>
            <p>TEL: 080-3365-9640(事務局)&emsp;</p>
            <p>FAX: 083-963-4157</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
