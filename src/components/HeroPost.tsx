import Image from 'next/image'
import React from 'react'

const HeroPost = () => {
  return (
    <div className='relative h-[40vw]'>
      <Image src='/img/hero-post-bg.jpg' fill alt='' className='h-full w-full object-cover' />
      <Image
        src='/img/hero-letter-cover.svg'
        width={1280}
        height={256}
        className='absolute bottom-0 z-10 w-full'
        alt=''
      />
    </div>
  )
}

export default HeroPost
