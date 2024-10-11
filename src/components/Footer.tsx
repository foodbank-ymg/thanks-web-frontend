import Link from 'next/link'
import React from 'react'

import { menus } from '@/consts/menus'

const Footer = () => {
  return (
    <footer className='bg-primary'>
      <div className='mx-auto flex h-[160px] max-w-screen-lg items-center justify-between'>
        <div>ロゴと情報</div>
        <ul>
          {menus.map((menu, index) => (
            <li key={index}>
              <Link href={menu.href}>{menu.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
