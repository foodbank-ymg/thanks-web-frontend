import Image from 'next/image'
import React from 'react'

const HeroLetter = () => {
  return (
    <div className=''>
      <div className='relative pb-[10%]'>
        {/* <div className='aspect-[1280/540]'> */}
        <Image
          src='/img/hero-letter-bg.jpg'
          width={1280}
          height={640}
          alt=''
          className='object-cover'
        />
        {/* </div> */}
        <Image
          src='/img/hero-letter-cover.svg'
          width={1280}
          height={256}
          className='absolute bottom-0 z-10'
          alt=''
        />
        <Image
          src='/img/hero-fb-mark.svg'
          width={192}
          height={192}
          className='absolute right-[5%] bottom-[10%] z-20 w-[15%] rotate-[-10deg]'
          alt=''
        />
      </div>
    </div>
  )
}

export default HeroLetter
