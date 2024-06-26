import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import AboutHeadline from '@/components/AboutHeadline'
import {
  Event,
  EventClickDigitech,
  EventClickOfficial,
  EventClickTokuyamaKosen,
  event,
} from '@/lib/gtag'

type GroupsCountent = {
  image: string
  detail: string
  url: string
  event: Event
}
const GroupsCountents: GroupsCountent[] = [
  {
    image: '/img/group-tokuyama-kosen.png',
    detail:
      '情報電子工学科の学生有志3名が、LINEの機能を活用した記事投稿システムおよびWebサイト開発に挑戦。',
    url: 'https://www.tokuyama.ac.jp/',
    event: EventClickTokuyamaKosen,
  },
  {
    image: '/img/group-fbyamaguchi.png',
    detail:
      '食品を受け取った方の感謝の思いや日々の活動の情報などをより多くの方に発信し、さらなる支援を創出',
    url: 'https://www.fbyamaguchi.org/',
    event: EventClickOfficial,
  },
  {
    image: '/img/group-digitech-for-yamaguchi.png',
    detail:
      '徳山高専の学生やフードバンク山口など「デジテック for YAMAGUCHI」の会員同士による地域課題等の解決に挑戦する活動を促進',
    url: 'https://digitech-ymg.org/',
    event: EventClickDigitech,
  },
]

const AboutGroups = () => {
  const readerGroupsContent = (cont: GroupsCountent) => {
    return (
      <div className='flex flex-row items-center justify-center gap-[32px]  md:flex-col'>
        <Link
          href={cont.url}
          target='_blank'
          className='aspect-[1/1] max-w-[180px] rounded-full bg-mywhite p-[12px] drop-shadow-lg duration-200 hover:scale-105 md:max-w-[300px] md:p-[24px]'
          onClick={() => {
            event(cont.event)
          }}
        >
          <Image
            src={cont.image}
            width='300'
            height='300'
            alt='logo'
            className='w-full object-cover'
          />
        </Link>
        <p className='md:ml-0 md:w-full md:py-0'>{cont.detail}</p>
      </div>
    )
  }

  return (
    <div className='mx-auto max-w-screen-lg px-[32px] py-[2em]'>
      <div className='relative mx-auto md:w-[65%]'>
        <AboutHeadline title='関わっている団体' />
        <p className='mx-auto my-6 max-w-[600px] break-words text-left md:text-center'>
          当サイトは、デジタル技術を活用して地域課題の解決等に取り組むコミュニティ 「デジテック for
          YAMAGUCHI」の共創プロジェクトにより作成されました。
          徳山高専の学生が中心となって開発を行いました。
        </p>
      </div>
      <div className='flex flex-col justify-between gap-[32px] md:flex-row'>
        {GroupsCountents.map((cont, indx) => (
          <div key={indx} className='flex-1'>
            {readerGroupsContent(cont)}
          </div>
        ))}
      </div>
    </div>
  )
}

export default AboutGroups
