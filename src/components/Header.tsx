import Link from 'next/link'
import React from 'react'

import { menus } from '@/consts/menus'

const Header = () => {
  return (
    <header className='h-[120px] bg-white'>
      <div className='mx-auto flex max-w-[1200px] items-center justify-between'>
        <div className='size-24 rounded-full bg-primary'>
          <Link href='/'>
            <div className='flex size-full items-center justify-center'>ロゴ</div>
          </Link>
        </div>
        <ul className='flex gap-4'>
          {menus.map((menu) => (
            <li key={menu.href} className='rounded-full border border-gray-400 px-4 py-2'>
              <Link href={menu.href}>{menu.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Header
