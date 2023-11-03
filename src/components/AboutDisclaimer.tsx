import { defaultMaxListeners } from 'events'

import Image from 'next/image'
import React from 'react'

import { classNames } from '@/lib/classNames'
type details = {
  detail_1: string
  detail_2: string
  detail_3?: string
}

type RightCountent = {
  image: string
  title: string
  detail: details[]
}

const RightCountents: RightCountent[] = [
  {
    image: '/img/flower_l.svg',
    title: '著作権について',
    detail: [
      {
        detail_1:
          'サイト上のコンテンツ（テキスト、画像など）は著作権で保護されており、無断で複製、再配布、または転載することは禁止されています。',
        detail_2:
          'コンテンツを使用したい場合は必ず事前にご連絡いただき、当法人の許可を得てください',
      },
    ],
  },
  {
    image: '/img/flower_l.svg',
    title: '免責事項',
    detail: [
      {
        detail_1:
          '予告なしに内容やアドレスを変更または削除する場合がありますので、あらかじめご了承ください',
        detail_2:
          '当サイトの利用は、利用者ご自身の責任において行われるものとします。当サイト上の掲載情報については、慎重に作成、管理しますが、すべての情報の正確性および完全性を保証するものではありません。あらかじめ、ご了承ください。',
        detail_3:
          '当サイトから入手された情報により発生した問題・障害に対して、当サイトの開発・運営者はいかなる責任も負いません。',
      },
    ],
  },
]

const AboutRightDisclaimer = () => {
  const renderRightContent = (cont: RightCountent) => {
    return (
      <div className='pt-2h pb-2h'>
        <div className='mx-auto px-[0.5em]'>
          <div className='text-h flex w-full flex-col items-center justify-center gap-[0.5em] text-center md:flex-row md:gap-0'>
            <div className='relative mx-auto max-md:w-full md:w-[70%] md:min-w-[480px]'>
              <p className='z-10 px-[0.5em] after:absolute after:inset-0 after:z-[-10] after:h-[0.75em] after:translate-y-[1em] after:justify-items-stretch after:rounded-full after:bg-myyellow'>
                {cont.title}
              </p>
            </div>
          </div>
          <div className='my-[32px] mx-auto grid max-w-[480px] grid-flow-row gap-[1em]'>
            <div className='relative flex-row'>
              <Image
                src={cont.image}
                width={20}
                height={20}
                alt=''
                className='absolute top-1 aspect-[1/1]'
              />
              {cont.detail.map((item, index) => (
                <p key={index} className='pl-[1.5em]'>
                  {item.detail_1}
                </p>
              ))}
            </div>

            <div className='relative flex-row'>
              <Image
                src={cont.image}
                width={20}
                height={20}
                alt=''
                className='absolute top-1 aspect-[1/1]'
              />
              {cont.detail.map((item, index) => (
                <p key={index} className='pl-[1.5em]'>
                  {item.detail_2}
                </p>
              ))}
            </div>

            <div className='relative flex-row'>
              <Image
                src={cont.image}
                width={20}
                height={20}
                alt=''
                className='absolute top-1 aspect-[1/1]'
              />
              {cont.detail.map((item, index) => (
                <p key={index} className='pl-[1.5em]'>
                  {item.detail_3}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='w-full rounded-common p-[2em]'>
      {RightCountents.map((cont, indx) => (
        <div key={indx}>{renderRightContent(cont)}</div>
      ))}
    </div>
  )
}

export default AboutRightDisclaimer
