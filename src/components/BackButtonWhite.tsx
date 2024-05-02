'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {
  label: string
}

const BackButtonWhite = (props: Props) => {
  const router = useRouter()

  return (
    <div className='relative h-[48px] w-[260px] md:h-[64px] md:w-[350px]'>
      <button
        onClick={() => router.back()}
        className='text-btn absolute z-20 flex h-[48px] w-[260px] items-center justify-center rounded-full border-myyellow bg-mywhite hover:bg-myyellow md:h-[64px] md:w-[350px]'
      >
        {props.label}
      </button>
      <div className='absolute -bottom-2 z-10 h-[48px] w-[260px] rounded-full bg-mygray/40 md:h-[64px] md:w-[350px]' />
    </div>
  )
}

export default BackButtonWhite
