import Link from 'next/link'
import React from 'react'

import { menus } from '@/consts/menus'

const Footer = () => {
  return (
    <footer className='bg-white'>
      <div className='mx-auto flex  h-[160px] max-w-screen-lg items-center justify-between'>
        <div className='flex' >
          <img src='null' className='p-3'>
          </img>

          <div className='text-left text-sm'>
            <div className='p-2'>
              <p className='text-3xl'>防府コミュニティブリッジ</p>
              <Link href='null'>特定非営利活動法人市民活動さぽーとねっと</Link>
            </div>

            <ul className='p-2'>
              <li>住所</li>
              <li>電話番号</li>
            </ul>
          </div>
        </div>

        <ul className='text-base'>
          {menus.map((menu, index) => (
            <li  className = "p-1" key={index}>
              <Link href={menu.href}>{menu.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
