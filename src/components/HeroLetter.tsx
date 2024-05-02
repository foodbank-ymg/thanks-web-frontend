import Image from 'next/image'
import React from 'react'

const HeroLetter = () => {
  return (
    <div className=''>
      <div className='relative aspect-video'>
        <Image
          src='/img/hero-letter-bg.jpg'
          fill
          alt=''
          priority={false}
          className='aspect-video object-cover'
        />
        <Image
          src='/img/hero-letter-cover.svg'
          width={1280}
          height={256}
          className='absolute bottom-0 w-full'
          alt=''
        />
        <Image
          src='/img/hero-fb-mark.svg'
          width={192}
          height={192}
          className='absolute bottom-[10%] right-[5%] z-20 w-[15%] rotate-[-10deg]'
          alt=''
        />
      </div>
    </div>
  )
}

export default HeroLetter
