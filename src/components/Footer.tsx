import Link from 'next/link'
import React from 'react'

import { menus } from '@/consts/menus'

const Footer = () => {
  return (
    <footer className='bg-white'>
      <div className='justify-starts relative mx-auto flex max-w-screen-lg flex-col items-center space-y-5 p-5 md:flex-row'>
        <img src='null' className='w-32 p-4' alt='ロゴ' />

        <div className='flex-col md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2'>
          <div className='flex space-x-5 md:flex-col md:space-x-0'>
            <Link href='/provider'>&#x25B6; おくる</Link>
            <Link href='/recipient'>&#x25B6; うけとる</Link>
          </div>
          <Link href='/about'>&#x25B6; このサイトについて</Link>
        </div>

        <div className='space-y-3 break-words text-center text-sm md:text-left'>
          <p className='space-y-5 text-2xl'>防府コミュニティブリッジ</p>
          <Link href='null'>特定非営利活動法人市民活動さぽーとねっと</Link>
          <p className='mt-2'>〒745-0035 山口県防府市栄町1-1-17 (ルルサス防府)</p>
          <p>TEL 0835-24-7744</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
