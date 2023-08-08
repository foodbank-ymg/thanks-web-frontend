import Image from 'next/image'
import React from 'react'

const HeroPost = () => {
  return (
    <div className='h-[70%]'>
      <div className='relative h-[50%]'>
        <Image
          src='/img/hero-post-bg.jpg'
          width={1280}
          height={540}
          alt=''
          className='object-cover'
        />
        <Image
          src='/img/hero-letter-cover.svg'
          width={1280}
          height={256}
          className='absolute bottom-0 z-10'
          alt=''
        />
      </div>
    </div>
  )
}

export default HeroPost
