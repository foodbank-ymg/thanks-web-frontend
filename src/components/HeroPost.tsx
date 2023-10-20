import Image from 'next/image'
import React from 'react'

type Props = {
  bgUrl: string
}

const HeroPost = ({ bgUrl }: Props) => {
  return (
    <div className='relative h-[40vw] max-h-[540px] min-h-[300px]'>
      <Image src={bgUrl} fill alt='' className='h-full w-full object-cover' />
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
