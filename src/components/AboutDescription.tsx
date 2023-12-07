import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import LinkButtonBrown from '@/components/LinkButtonBrown'
import { classNames } from '@/lib/classNames'

type DescContent = {
  image: string
  title: string
  description: string
}

const AboutDescription = () => {
  return (
    <div className='mx-[5vw]'>
      <div className='rounded-limit mx-auto box-content flex max-w-screen-lg flex-col gap-[32px] bg-white p-[5vw] lg:flex-row lg:gap-[48px]'>
        <div className='flex-1'>
          <p className='text-h text-center lg:text-left'>
            ‘‘ありがとう’’をみんなに届ける
            <br />
            このサービスのココロを
            <br />
            さらにみんなに届けたい。
          </p>
          <p className='mt-[20px] lg:mt-[32px]'>
            当サイトのWebシステムは、プログラムをはじめ開発の情報を全て公開しています。
            <br />
            食品に限らずモノやコトの享受や活動に際して、‘‘ありがとう‘‘の気持ちを集めて届けたいケースがございましたら、是非ご活用ください。(システムの構築と運用は、技術者のサポートと実費が必要です)
          </p>
          <div className='mx-auto mt-[20px] flex justify-center lg:mt-[32px]'>
            <LinkButtonBrown
              label='Githubで情報を見る'
              onClick={() => {
                window.open(
                  'https://github.com/foodbank-ymg/thanks-web-frontend',
                  '_blank',
                  'noreferrer',
                )
              }}
            />
          </div>
        </div>
        <div className='mx-auto max-w-[480px]'>
          <Image src='/img/about-oss-image.jpg' width='480' height='360' alt='' />
          <p className='py-1 text-center'>初期開発メンバーがリリース時に説明した様子 2023/12/1</p>
        </div>
      </div>
    </div>
  )
}

export default AboutDescription
