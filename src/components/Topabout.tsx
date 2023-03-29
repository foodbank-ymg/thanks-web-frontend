import { imageConfigDefault } from 'next/dist/shared/lib/image-config'
import React from 'react'

const Topabout = () => {
  return (
    <>
      {''}
      <div className='grid h-auto w-full justify-items-stretch rounded-b-3xl bg-amber-400 text-center font-black text-red-900 md:relative'>
        <div className='justify-self-center p-8 underline decoration-white decoration-[16px] underline-offset-0 md:relative'>
          <p className='align-bottom text-4xl'>このサイトについて</p>
        </div>
        <div className='items-stretch md:relative md:flex '>
          <div className='bg-amber-300 md:relative md:w-1/2'>
            <div className='top-20 left-40 md:absolute'>
              <img className='w-30 h-30' src='image_1.jpg' alt='デジテック for Yamaguchi' />
            </div>
            <div className='top-0 left-0 md:absolute '>
              <img className='w-30 h-30' src='image_2.png' alt='フードバンク山口' />
            </div>
            <div className='top-40 left-80 md:absolute'>
              <img className='w-30 h-30' src='image_3.jpg' alt='徳山高専' />
            </div>
          </div>
          <div className='p-7 text-start md:relative md:w-1/2'>
            <div className='mb-2'>
              <p className='text-2xl leading-normal '>たくさんの&quot;ありがとう&quot;に出会い、</p>
              <p className='text-2xl leading-normal '>想いを伝えたいチカラが</p>
              <p className='text-2xl leading-normal '>あつまりました。</p>
            </div>
            <div className='my-2'>
              <p className='text-sm leading-normal '>
                みなさんからいただいた、たくさんの&quot;ありがとう&quot;を
              </p>
              <p className='text-sm leading-normal '>もっとあなたに届けたい気持ちから、</p>
              <p className='text-sm leading-normal '>
                フードバンク山口の活動に賛同してくださった方々が、
              </p>
              <p className='text-sm leading-normal '>それぞれの想いを胸にあつまり、</p>
              <p className='text-sm leading-normal  '>このサイトをカタチにしました。</p>
            </div>
            <div className='mt-2'>
              <p className='text-sm leading-normal '>
                あなたにたくさんの&quot;ありがとう&quot;がお届けできていれば
              </p>
              <p className='text-sm leading-normal  '>幸いです。</p>
            </div>
          </div>
        </div>
        <div className='translate-y-4 justify-self-center rounded-full border-4 border-red-900 bg-amber-400 px-10 py-2 shadow-lg shadow-gray-500'>
          <button className=''>いきさつの物語を読む</button>
        </div>
      </div>
    </>
  )
}

export default Topabout
