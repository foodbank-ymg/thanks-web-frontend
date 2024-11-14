import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { menus } from '@/consts/menus'
import { cn } from '@/lib/utils'

const Header = () => {
  return (
    <header className='h-[80px] bg-white'>
      <div className='mx-auto flex max-w-[1200px] items-start justify-between'>
        <div className='size-40 rounded-full bg-white p-6'>
          <Link
            href='/'
            className='relative block size-full overflow-hidden rounded-full bg-primary'
          >
            <Image src='/img/logo.png' fill alt='logo' className='' />
          </Link>
        </div>
        <ul className='flex h-[80px] items-center gap-4'>
          {menus.map((menu) => (
            <li key={menu.href} className={cn('rounded-full border-2 px-4 py-2', menu.bo_color)}>
              <Link href={menu.href} className={menu.tx_color}>
                {menu.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Header
