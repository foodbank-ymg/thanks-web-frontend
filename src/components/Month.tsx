import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { classNames } from '@/lib/classNames'
import { Post } from '@/types/Post'

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
          src='/Illust_letter.svg'
          width={40}
          height={20}
          alt=''
          className='absolute right-[42%] translate-y-[-30%] translate-x-[50%] object-cover max-md:w-[10%]  md:w-[6%]'
        />
      </div>
      <div className='flex items-center justify-between'>
        <Link href={`/monthly-posts/${prevYearMonth}`}>
          <div
            className={classNames(
              'flex w-[15vw] min-w-[120px] max-w-[200px] items-center justify-end rounded-r-common bg-myyellow text-mywhite',
              prevYearMonth === '' && 'invisible',
            )}
          >
            <p className='arrow sample5-4'></p>
            <p className='text-month py-[1vw] pr-[20px] pl-[14px] tracking-[10px]'>先月</p>
          </div>
        </Link>
        <div className='items-center justify-items-center text-[4rem]'>
          {monthlyPath.split('-')[1]}
          <span className='text-[2rem]'>月</span>
        </div>
        <Link href={`/monthly-posts/${nextYearMonth}`}>
          <div
            className={classNames(
              'flex w-[15vw] min-w-[120px] max-w-[200px] items-center justify-start rounded-l-common bg-myyellow text-mywhite',
              nextYearMonth === '' && 'invisible',
            )}
          >
            <p className='text-month py-[1vw] pl-[30px] tracking-[10px]'>次月</p>
            <p className='arrow sample5-3 '></p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Month
