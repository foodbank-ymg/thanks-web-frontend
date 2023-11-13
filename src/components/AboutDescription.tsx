import Image from 'next/image'
import React from 'react'

import { classNames } from '@/lib/classNames'

type DescContent = {
  image: string
  title: string
  description: string
}

const AboutDescription = () => {
  return (
    <div className='bg-myyellowpale p-[2.5em]'>
      <div className='rounded-common bg-white p-[2.5em]'>
        <div className='flex flex-col lg:flex-row'>
          <div className='w-auto px-[3vw] lg:w-1/2'>
            <div className='w-5/6'>
              <p className='text-h'>
                ‘‘ありがとう’’をみんなに届けるこのサービスのココロをさらにみんなに届けたい。
              </p>
            </div>
            <p className='mt-10'>
              当サイトでは、食品を寄贈いただいた方に、食品を受け取られた方からの感謝の気持ちを届けます。
            </p>
            <p>
              そして、フードバンク山口の活動を多くの方に知っていただき、賛同いただきながら、食を通じた食品ロス削減を進めます。当サイトのプログラムをはじめ、開発の情報を全て公開しています。
            </p>
            <button className='text-btn mt-10 h-auto w-full rounded-full bg-mybrown py-2 text-mywhite'>
              Githubで情報を見る
            </button>
          </div>

          <div className='mt-10 w-auto px-[3vw] lg:mt-0 lg:w-1/2'>
            <Image src='' width='100' height='100' alt='' className='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutDescription
