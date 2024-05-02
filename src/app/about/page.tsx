'use client'

import Image from 'next/image'

import AboutDescription from '@/components/AboutDescription'
import AboutGroups from '@/components/AboutGroups'
import AboutIntroduction from '@/components/AboutIntroduction'
import AboutRightDisclaimer from '@/components/AboutRightDisclaimer'
import Donation from '@/components/Donation'
import HeroRect from '@/components/HeroRect'

const AboutPage = () => {
  return (
    <>
      <HeroRect bgUrl='/img/hero-rect-bg.jpg'>
        <h1 className='text-hb flex flex-col items-center'>
          <div className='h-[67px] w-[80vw] max-w-[400px]'>
            <Image
              src='/img/logo_mix.svg'
              width={400}
              height={100}
              alt=''
              className='h-[100px] w-[400px]'
            />
          </div>
          について
        </h1>
      </HeroRect>

      <div className='bg-myyellow py-[2.5em]'>
        <AboutIntroduction />
      </div>
      <AboutGroups />
      <AboutDescription />
      <AboutRightDisclaimer />
      <Donation />
    </>
  )
}

export default AboutPage
