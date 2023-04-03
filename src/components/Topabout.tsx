import { imageConfigDefault } from 'next/dist/shared/lib/image-config'
import Image from 'next/image'
import React from 'react'

const Topabout = () => {
  return (
    <div className='palt bg-amber-400'>
      {''}
      <div className='font-body mx-auto grid h-auto w-full max-w-[1024px] justify-items-stretch rounded-b-2xl text-center font-black text-red-900'>
        <div className='justify-self-center p-8'>
          <div className='relative text-4xl before:absolute before:bottom-[12.5%] before:left-0 before:-z-10 before:block before:h-[10px] before:w-full before:rounded-[10px] before:bg-white before:content-none'>
            このサイトについて
          </div>
        </div>
        <div className='flex flex-col items-stretch md:flex-row '>
          {/* 左島 */}
          <div className='md:w-1/2'>
            <div className='top-20 left-40 p-[16px]'>
              <div className='relative aspect-[10/6] w-full md:aspect-[1/1]'>
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
            <div className='mb-2 w-[90%]'>
              <p className='text-3xl '>たくさんの</p>
              <p className='text-3xl '>&quot;ありがとう&quot;に出会い、</p>
              <p className='text-3xl '>想いを伝えたいチカラが</p>
              <p className='text-3xl '>あつまりました。</p>
            </div>
            <div className='my-2'>
              <p className='text-left'>
                みなさんからいただいた、たくさんの&quot;ありがとう&quot;をもっとあなたに届けたい気持ちから、フードバンク山口の活動に賛同してくださった方々が、それぞれの想いを胸にあつまり、このサイトをカタチにしました。
              </p>
            </div>
            <div className='mt-2'>
              <p className='text-left text-lg'>
                あなたにたくさんの&quot;ありがとう&quot;がお届けできていれば幸いです。
              </p>
            </div>
          </div>
        </div>
        <button className='translate-y-4 justify-self-center rounded-full border-4 border-red-900 bg-amber-400 px-10 py-2 shadow-gray-500 hover:bg-red-900 hover:text-white'>
          <p className=''>いきさつの物語を読む</p>
        </button>
      </div>
    </div>
  )
}

export default Topabout
