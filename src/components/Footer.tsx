import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { menus } from '@/consts/menus'

const Footer = () => {
  return (
    <footer className='bg-white'>
      <div className='relative mx-auto flex max-w-screen-lg flex-col items-center justify-start space-y-5 p-5 md:flex-row'>
        <Image src='/img/logo.png' width={128} height={128} className='p-4' alt='ロゴ' />

        <ul className='flex-col gap-y-2 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2'>
          {menus.map((menu, index) => (
            <li key={index} className='flex '>
              <Image src='/img/hcf_yajirushi.png' width={23} height={16} alt=''></Image>
              <Link href={menu.href}>{menu.label}</Link>
            </li>
          ))}
        </ul>

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
