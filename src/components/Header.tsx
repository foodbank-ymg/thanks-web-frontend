import Link from 'next/link'
import React from 'react'

const pages = [
  {
    label: '提供する',
    href: '/provider',
  },
  {
    label: '受け取る',
    href: '/recipient',
  },
  {
    label: 'このサイトについて',
    href: '/about',
  },
]

const Header = () => {
  return (
    <div className='flex h-40 w-full items-center justify-between bg-white'>
      <div className='size-24 rounded-full bg-yellow-200'>
        <Link href='/'>
          <div className='flex size-full items-center justify-center'>ロゴ</div>
        </Link>
      </div>
      <ul className='flex gap-4'>
        {pages.map((page) => (
          <li key={page.href} className='rounded-full border border-gray-400 px-4 py-2'>
            <Link href={page.href}>{page.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Header
