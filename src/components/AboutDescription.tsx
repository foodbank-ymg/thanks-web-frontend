import Image from 'next/image'
import React from 'react'

const AboutDescription = () => {
  return (
    <div className='bg-myyellow'>
      <div className='rounded-large bg-white'>
        <div className='flex-col p-[5em]'>
          <div className='flex w-full pb-[5em] max-md:flex-col md:flex-row'>
            {/*PC 上*/}
            <div className='max-md:w-full md:w-1/2'>
              {/*PC 右上*/}
              <Image
                src='/img/hero-rect-bg.jpg'
                width={1280}
                height={1280}
                alt=''
                className='aspect-[1/1] object-cover'
              />
            </div>
            <div className='h-auto max-md:w-full md:w-1/2'>
              {/*PC 左上*/}
              <div className='text-left'>
                <h2>{/*タイトル*/}</h2>
                <desc>{/*本文 */}</desc>
                <desc>{/*まとめ */}</desc>
              </div>
            </div>
          </div>
          <div className='flex w-full max-md:flex-col md:flex-row-reverse'>
            {/*PC 下*/}
            <div className='max-md:w-full md:w-1/2'>
              {/*PC 左下*/}
              <Image
                src='/img/hero-rect-bg.jpg'
                width={1280}
                height={1280}
                alt=''
                className='aspect-[1/1] object-cover'
              />
            </div>
            <div className='h-auto max-md:w-full md:w-1/2'>
              {/*PC 右下*/}
              <div className='max-md:text-left md:text-right'>
                <h2>{/*タイトル*/}OOOOOOOOOOOOOOOOOOO</h2>
                <desc>{/*本文 */}</desc>
                <desc>{/*まとめ */}</desc>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutDescription
