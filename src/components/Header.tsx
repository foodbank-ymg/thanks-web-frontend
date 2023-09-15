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
    path: '/monthly-posts/latest',
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
        <div className='flex h-[48px] w-full items-center justify-center bg-myyellow md:h-[100px] md:w-[400px] md:rounded-br-[36px]'>
          <Link href='/'>
            <Image
              src='/img/logo_alt.svg'
              width={400}
              height={100}
              alt=''
              className='h-[30px] md:h-[60px]'
            />
          </Link>
        </div>
        {/* 横幅が狭い時は出せない、別の表現になる */}
        <div className='mr-[32px] hidden h-[64px] items-center gap-x-[24px] rounded-full bg-myyellow px-[32px] text-mywhite lg:flex'>
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
