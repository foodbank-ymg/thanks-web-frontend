import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

import AboutDescription from '@/components/AboutDescription'
import AboutGroups from '@/components/AboutGroups'
import AboutIntroduction from '@/components/AboutIntroduction'
import HeroRect from '@/components/HeroRect'

const AboutPage = () => {
  return (
    <>
      <HeroRect bgUrl="bg-[url('/img/hero-rect-bg.jpg')]">
        <h1 className='text-hb flex flex-col items-center'>
          <div className='h-[67px] w-[80vw] max-w-[400px]'>
            <Image src='/img/logo_mix.svg' width='400' height='100' alt='' className='' />
          </div>
          について
        </h1>
      </HeroRect>

      <div className='bg-myyellow py-[2.5em]'>
        <AboutIntroduction />
      </div>
      <AboutGroups />
      <AboutDescription />
    </>
  )
}

export default AboutPage
