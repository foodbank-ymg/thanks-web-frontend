import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const links = [
  {
    label: '最近のおたより',
    path: '/latest-posts',
  },
  {
    label: 'これまでのおたより',
    path: '/#',
  },
  {
    label: 'このサイトについて',
    path: '/about',
  },
]

const Header = () => {
  return (
    <div>
      <div className='flex flex-row items-center justify-between'>
        <div className='flex h-[100px] w-[400px] justify-center rounded-br-[32px] bg-myyellow'>
          <Image src='/img/logo_alt.svg' width={400} height={100} alt='' className='w-[90%]' />
        </div>
        {/* 横幅が狭い時は出せない、別の表現になる */}
        <div className='mr-[32px] hidden h-[64px] items-center gap-x-[24px] rounded-[64px] bg-myyellow px-[32px] text-mywhite lg:flex'>
          {links.map((link) => (
            <Link href={link.path} key={link.label}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
