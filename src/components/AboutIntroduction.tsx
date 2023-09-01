import Image from 'next/image'
import React from 'react'

const AboutIntroduction = () => {
  return (
    <div className='bg-myyellow px-[2.5em]'>
      <div className='mx-auto max-w-screen-lg py-[2.5em]'>
        <div className='mx-auto grid h-auto w-full rounded-b-common text-center'>
          {/* イメージと文章の2段組み */}
          <div className='flex flex-col items-center gap-[5%] md:flex-row'>
            {/* 左島 */}
            <div className='md:mb-[50px] md:w-[45%]'>
              <Image
                width={952}
                height={958}
                className='hidden md:block'
                src='/conglo_@l.png'
                alt='徳山高専とデジテックforYamaguchiとフードバンク山口'
              />
              <Image
                width={964}
                height={558}
                className='md:hidden'
                src='/conglo_@s.png'
                alt='徳山高専とデジテックforYamaguchiとフードバンク山口'
              />
            </div>
            {/* 右島　*/}
            <div className='my-4 text-left md:w-[50%]'>
              <p className='text-h text-center md:text-left'>
                たくさんの
                <br className='md:hidden' />
                &quot;ありがとう&quot;に出会い、
                <br />
                想いを伝えたいチカラが
                <br />
                あつまりました
              </p>
              <div className='max-w-[400px]'>
                <p className='my-4'>
                  みなさんからいただいた、たくさんの&quot;ありがとう&quot;をもっとあなたに届けたい気持ちから、フードバンク山口の活動に賛同してくださった方々が、それぞれの想いを胸にあつまり､このサイトをカタチにしました。
                </p>
                <p className='my-4'>
                  あなたにたくさんの&quot;ありがとう&quot;がお届けできていれば幸いです。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutIntroduction
