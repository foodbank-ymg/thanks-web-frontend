import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { Post } from '@/types/Post'

type Props = {
  posts: Post[]
}

const Month = ({ posts }: Props) => {
  return (
    <div className='mx-auto'>
      <div className='w-full'>
        <Image
          src='/Illust_letter.svg'
          width={40}
          height={20}
          alt=''
          className='absolute right-[42%] translate-y-[-30%] translate-x-[50%] object-cover max-md:w-[10%]  md:w-[6%]'
        />
      </div>
      <div className='flex w-full max-w-[1280px] grid-flow-col items-center justify-between'>
        <div className='flex w-1/3 max-w-[200px]'>
          <div className='flex w-full flex-row items-center justify-end rounded-r-common bg-myyellow text-mywhite'>
            <a className='arrow sample5-4'></a>
            <p className='text-month py-[1vw] pr-[20px] pl-[14px] tracking-[10px]'>先月</p>
          </div>
        </div>
        <div className='grid w-1/3 items-center justify-items-center text-[4rem]'>
          <div className=''>
            3<span className='text-[2rem]'>月</span>
          </div>
        </div>
        <div className='flex w-1/3 max-w-[200px] flex-row-reverse'>
          <div className='flex w-full flex-row items-center justify-start rounded-l-common bg-myyellow text-mywhite'>
            <p className='text-month py-[1vw] pl-[30px] tracking-[10px]'>次月</p>
            <a className='arrow sample5-3 '></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Month
