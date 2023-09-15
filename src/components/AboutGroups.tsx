import Image from 'next/image'
import React from 'react'

const AboutGroups = () => {
  return (
    <div className='h-auto  bg-myyellowpale text-center'>
      <div className='flex flex-col items-center justify-center'>
        <div className='w-[60%]'>
          <h1 className=''>aaaaaaaaaa</h1>
          <div className='mt-[-20px] mb-6 rounded-full border-[16px] border-solid border-myyellow'></div>
          <p className='mb-6 break-words'>
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </p>
        </div>
      </div>

      <div className='mb-10 flex flex-col justify-center text-left lg:flex-row'>
        <div className='mx-10 lg:w-auto'>
          <div className='flex  flex-row justify-center lg:flex-col'>
            <Image src='/img/hero-fb-mark.svg' width='200' height='200' alt='logo' className='' />
            <p className='ml-[200px] lg:ml-0'>aiueo。</p>
          </div>
        </div>

        <div className='mx-10 lg:w-auto'>
          <div className='flex flex-row justify-center lg:flex-col'>
            <Image src='/img/hero-fb-mark.svg' width='200' height='200' alt='logo' className='' />
            <p className='ml-[200px] lg:ml-0'>aiueo。</p>
          </div>
        </div>

        <div className='mx-10 lg:w-auto'>
          <div className='flex flex-row justify-center lg:flex-col'>
            <Image src='/img/hero-fb-mark.svg' width='200' height='200' alt='logo' className='' />
            <p className='ml-[200px] lg:ml-0'>aiueo。</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutGroups
