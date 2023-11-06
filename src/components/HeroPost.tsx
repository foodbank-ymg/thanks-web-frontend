import Image from 'next/image'
import React from 'react'

type Props = {
  bgUrl: string
}

const HeroPost = ({ bgUrl }: Props) => {
  return (
    <div
      className='relative h-[65vw] max-h-[540px]'
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.15) 100%), url(${bgUrl})`,
        backgroundRepeat: 'no-repeat, repeat no-repeat',
        backgroundPosition: 'center, center, center',
        backgroundSize: 'cover, cover, cover',
      }}
    >
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
