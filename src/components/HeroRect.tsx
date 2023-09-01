import Image from 'next/image'
import React from 'react'

type Props = {
  children: React.ReactNode
}

const HeroRect = ({ children }: Props) => {
  return (
    <div className=''>
      <div className=' relative'>
        {/* <div className='aspect-[1280/540]'> */}
        <Image
          src='/img/hero-rect-bg.jpg'
          width={1280}
          height={540}
          alt=''
          className='object-cover'
        />
        <div className='absolute bottom-[50%] right-[50%] z-10 translate-x-[50%] translate-y-[50%]'>
          <div className='rounded-common bg-mywhite/50 px-[64px] py-[32px]'>{children}</div>
        </div>
      </div>
    </div>
  )
}

export default HeroRect
