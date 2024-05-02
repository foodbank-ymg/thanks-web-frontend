'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

import { classNames } from '@/lib/classNames'

const links = [
  {
    href: '/latest-posts',
    text: '最近のお便り',
  },
  {
    href: '/monthly-posts/latest',
    text: 'これまでのお便り',
  },
  {
    href: '/about',
    text: 'ありがとうWebsiteについて',
  },
]

const Menu = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className='px-[5vw] pb-[5vw]'>
      <div
        className={classNames(
          'relative overflow-hidden rounded-common border-[3px] border-mybrown',
          !isOpen && 'hidden',
        )}
      >
        <div
          className='bg-mybrown py-[16px]'
          onClick={() => {
            setIsOpen(false)
            router.push('/')
          }}
        >
          <Image
            src='/img/logo_normal.svg'
            width={261}
            height={63}
            alt='logo'
            className='mx-auto'
          />
        </div>
        <div className='bg-myyellow bg-smilewhite bg-[right_1rem_top_1rem] bg-no-repeat text-mybrown'>
          <div className='relative  pb-[64px] pt-[48px]'>
            <div className='mx-auto flex w-[60vw] flex-col items-start gap-y-[24px]'>
              {links.map((link) => (
                <button
                  key={link.text}
                  onClick={() => {
                    setIsOpen(false)
                    router.push(link.href)
                  }}
                  className='border-b border-dashed border-myyellow pb-px hover:border-mybrown'
                >
                  <span className='mr-2'>▶</span>
                  {link.text}
                </button>
              ))}
            </div>
            <Image
              src='/img/flower_brown_s.svg'
              width={21}
              height={27}
              alt=''
              className='absolute bottom-[-4px] right-[20vw]'
            />
            <Image
              src='/img/flower_brown_m.svg'
              width={30}
              height={39}
              alt=''
              className='absolute bottom-[-4px] right-[10vw]'
            />
          </div>
        </div>
      </div>
      <div
        className='absolute bottom-[2.5vw] left-[2.5vw]'
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      >
        {isOpen ? (
          <Image src='/img/menu_brown.svg' width={60} height={64} alt='menu' />
        ) : (
          <Image src='/img/menu_white.svg' width={60} height={64} alt='menu' />
        )}
      </div>
    </div>
  )
}

export default Menu
