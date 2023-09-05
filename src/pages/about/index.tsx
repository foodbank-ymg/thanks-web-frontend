import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

import AboutDescription from '@/components/AboutDescription'
import AboutGroups from '@/components/AboutGroups'
import AboutIntroduction from '@/components/AboutIntroduction'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeroRect from '@/components/HeroRect'

const AboutPage = () => {
  return (
    <>
      {/* 固定ヘッダー */}
      <div className='fixed z-50 w-full max-w-main'>
        <Header />
      </div>

      {/* ヒーローセクション */}
      <HeroRect>
        <h1 className='flex w-[400px] max-w-[400px] flex-col'>
          <div className='relative h-[100px] w-[400px]'>
            <Image
              src='/img/logo_normal.svg'
              width='400'
              height='100'
              alt=''
              className='absolute z-20 h-full w-full'
            />
            <Image
              src='/img/logo_alt.svg'
              width='400'
              height='110'
              alt=''
              className='absolute z-20 h-full w-full'
            />
          </div>
          <p>について</p>
        </h1>
      </HeroRect>

      <AboutIntroduction />
      <AboutGroups />
      <AboutDescription />
    </>
  )
}

export default AboutPage
