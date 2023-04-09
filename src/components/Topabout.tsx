import { imageConfigDefault } from 'next/dist/shared/lib/image-config'
import Image from 'next/image'
import React from 'react'

const Topabout = () => {
  return (
    <div className='palt rounded-b-[24px] bg-amber-400 md:rounded-b-[50px]'>
      {''}
      <div className='mx-auto grid h-auto w-full max-w-full justify-items-stretch rounded-b-2xl text-center font-body font-black text-red-900'>
        <div className='z-10 justify-self-center p-8'>
          <div className='relative text-4xl'>このサイトについて</div>
        </div>
        <div className='relative justify-self-center'>
          <div className='absolute left-[-165px] top-[-44px] h-4 w-[330px] rounded-full border-8 border-white'></div>
        </div>
        <div className='flex flex-col items-stretch md:flex-row'>
          {/* 左島 */}
          <div className='md:w-1/2'>
            <div className='w-full p-[16px]'>
              <div className='relative aspect-[10/6] max-md:mx-auto max-md:w-[90%] md:aspect-[1/1] md:max-w-lg md:flex-row-reverse'>
                <Image
                  fill
                  className='hidden md:block'
                  src='/img/conglo_@l.png'
                  alt='デジテック for Yamaguchi'
                />
                <Image
                  fill
                  className='md:hidden'
                  src='/img/conglo_@s.png'
                  alt='デジテック for Yamaguchi'
                />
              </div>
            </div>
          </div>
          {/* 右島　*/}
          <div className='m-auto w-[90%] p-7 text-center md:w-1/2 md:text-start'>
            <div className='mb-2 '>
              <p className='text-3xl leading-10 md:leading-[3rem]'>
                たくさんの
                <br className='md:hidden' />
                &quot;ありがとう&quot;に出会い、
                <br />
                想いを伝えたいチカラが
                <br />
                あつまりました
              </p>
            </div>

            <div className='my-4 text-left md:w-[80%]'>
              <p className='inline-block text-lg md:text-base'>
                みなさんからいただいた、たくさんの&quot;ありがとう&quot;を
                <br className='max-md:hidden' />
                もっとあなたに届けたい気持ちから、
                <br className='max-md:hidden' />
                フードバンク山口の活動に賛同してくださった方々が、
                <br className='max-md:hidden' />
                それぞれの想いを胸にあつまり､
                <br className='max-md:hidden' />
                このサイトをカタチにしました。
              </p>
            </div>
            <div className='mt-2 md:w-[75%]'>
              <p className='text-left text-base'>
                あなたにたくさんの&quot;ありがとう&quot;がお届けできていれば幸いです。
              </p>
            </div>
          </div>
        </div>
        <button className='w-[290px] translate-y-6 justify-self-center rounded-full border-4 border-red-900 bg-amber-400 px-10 py-2 shadow-gray-500 hover:bg-red-900 hover:text-white'>
          <p className='text-xl'>いきさつの物語を読む</p>
        </button>
      </div>
    </div>
  )
}

export default Topabout
