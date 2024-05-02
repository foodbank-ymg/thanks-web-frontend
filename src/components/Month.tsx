import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { classNames } from '@/lib/classNames'

type Props = {
  monthlyPath: string
  prevYearMonth: string
  nextYearMonth: string
}

const Month = ({ monthlyPath, prevYearMonth, nextYearMonth }: Props) => {
  return (
    <div className=''>
      <div className='relative'>
        <Image
          src='/img/letter.svg'
          width={40}
          height={20}
          alt=''
          className='absolute right-[42%] translate-x-1/2 translate-y-[-30%] object-cover max-md:w-[10%]  md:w-[6%]'
        />
      </div>
      <div className='flex items-center justify-between'>
        <Link
          href={`/monthly-posts/${prevYearMonth}`}
          className={classNames(
            'flex w-[15vw] min-w-[110px] max-w-[200px] items-center justify-end rounded-r-common bg-myyellow text-mywhite',
            prevYearMonth === '' && 'invisible',
          )}
        >
          <div className='relative size-5 rounded-[50%] bg-mywhite'>
            <div className='absolute left-1/2 top-1/2 w-[6px] translate-x-[-55%] translate-y-1/2 rotate-45 border border-myyellow'></div>
            <div className='absolute left-1/2 top-1/2 w-[6px] translate-x-[-55%] translate-y-[-130%] -rotate-45 border border-myyellow'></div>
          </div>
          <p className='text-month py-[1vw] pl-[12px] pr-[18px] tracking-[10px]'>先月</p>
        </Link>
        <div className='items-center justify-items-center text-[4rem]'>
          {monthlyPath.split('-')[1]}
          <span className='text-[2rem]'>月</span>
        </div>
        <Link
          href={`/monthly-posts/${nextYearMonth}`}
          className={classNames(
            'flex w-[15vw] min-w-[110px] max-w-[200px] items-center justify-start rounded-l-common bg-myyellow text-mywhite',
            nextYearMonth === '' && 'invisible',
          )}
        >
          <p className='text-month py-[1vw] pl-[30px] tracking-[10px]'>次月</p>
          <div className='relative size-5 rounded-[50%] bg-mywhite'>
            <div className='absolute left-1/2 top-1/2 w-[6px] translate-x-[-45%] translate-y-1/2 -rotate-45 border border-myyellow'></div>
            <div className='absolute left-1/2 top-1/2 w-[6px] translate-x-[-45%] translate-y-[-130%] rotate-45 border border-myyellow '></div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Month
