import { defaultMaxListeners } from 'events'

import Image from 'next/image'
import React from 'react'

import { classNames } from '@/lib/classNames'
import img from 'public/img/hanaicon20.png'

type RightCountent = {
  title: string
  details: string[]
}

const RightCountents: RightCountent[] = [
  {
    title: 'おたよりについて',
    details: [
      'おたよりは、食品を受け取った団体等（こども食堂など）が直接投稿し、管理者のチェックを経て公開されます。',
      'おたよりには、フードバンク山口が提供する食品だけでなく、多方面から提供された食品も掲載されることがあります。',
    ],
  },
  {
    title: '著作権について',
    details: [
      'サイト上のコンテンツ（テキスト、画像など）は著作権で保護されており、無断で複製、再配布、または転載することは禁止されています。',
      'コンテンツを使用したい場合は必ず事前にご連絡いただき、当法人の許可を得てください。',
    ],
  },
  {
    title: '免責事項',
    details: [
      '予告なしに内容やアドレスを変更または削除する場合がありますので、あらかじめご了承ください',
      '当サイトの利用は、利用者ご自身の責任において行われるものとします。当サイト上の掲載情報については、慎重に作成、管理しますが、すべての情報の正確性および完全性を保証するものではありません。あらかじめ、ご了承ください。',
      '当サイトから入手された情報により発生した問題・障害に対して、当サイトの開発・運営者はいかなる責任も負いません。',
    ],
  },
]

const AboutRightDisclaimer = () => {
  const renderRightContent = (cont: RightCountent) => {
    return (
      <div className='pt-h pb-h'>
        <div className='mx-auto px-[0.5em]'>
          <div className='text-h w-full justify-center text-center'>
            <div className='relative mx-auto max-w-[960px] max-md:max-w-[200px] md:w-[65%]'>
              <p className='z-10 px-[0.5em] after:absolute after:inset-0 after:z-[-10] after:h-[0.75em] after:translate-y-[1em] after:justify-items-stretch after:rounded-full after:bg-myyellow md:min-w-[480px]'>
                {cont.title}
              </p>
            </div>
          </div>
          <div className='my-[32px] mx-auto grid max-w-[600px] grid-flow-row gap-[1em]'>
            {cont.details.map((detail, idx) => (
              <div key={idx} className='relative flex-row'>
                <Image
                  src={img}
                  width={15}
                  height={15}
                  alt=''
                  className='absolute top-1 aspect-[1/1]'
                />
                <p className='pl-[1.5em]'>{detail}</p>
              </div>
            ))}
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
