import Image from 'next/image'
import React from 'react'

const AboutGroups = () => {
  return (
    <div className='h-auto  bg-myyellowpale text-center'>
      <div className='flex flex-col items-center justify-center'>
        <div className='w-[60%]'>
          <h1 className=''>○○○○○○○○○○</h1>
          <div className='mt-[-20px] mb-6 rounded-full border-[16px] border-solid border-myyellow'></div>
          <p className='mb-6 break-words'>
            ○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○
          </p>
        </div>
      </div>
      <div className='flex justify-center'>
        <Image
          src='illust_heartflower_r.svg'
          width='200'
          height='0'
          alt='logo'
          className='mx-10 w-1/4'
        />

        <Image
          src='illust_heartflower_r.svg'
          width='200'
          height='0'
          alt='logo'
          className='mx-10 w-1/4'
        />

        <Image
          src='illust_heartflower_r.svg'
          width='200'
          height='0'
          alt='logo'
          className='mx-10 w-1/4'
        />
      </div>
      <div className='flex justify-center text-left'>
        <div className='mx-10 w-1/4 break-words'>
          <p>○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○。</p>
        </div>
        <div className='mx-10  w-1/4 break-words'>
          <p>○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○。</p>
        </div>
        <div className='mx-10  w-1/4 break-words'>
          <p>○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○。</p>
        </div>
      </div>
    </div>
  )
}

export default AboutGroups
