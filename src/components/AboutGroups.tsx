import Image from 'next/image'
import React from 'react'

import img1 from '/public/img/group-tokuyama-kosen.png'
import img2 from '/public/img/group-fbyamaguchi.png'
import img3 from '/public/img/group-digitech-for-yamaguchi.png'

type GroupsCountent = {
  image: string
  detail: string
}
const GroupsCountents: GroupsCountent[] = [
  {
    image: '/img/group-tokuyama-kosen.png',
    detail:
      '情報電子工学科の学生有志3名が、LINEの機能を活用した記事投稿システムおよびWebサイト開発に挑戦。',
  },
  {
    image: '/img/group-fbyamaguchi.png',
    detail:
      '食品を受け取った方の感謝の思いや日々の活動の情報などをより多くの方に発信し、さらなる支援を創出',
  },
  {
    image: '/img/group-digitech-for-yamaguchi.png',
    detail:
      '徳山高専の学生やフードバンク山口など「デジテック for YAMAGUCHI」の会員同士による地域課題等の解決に挑戦する活動を促進',
  },
]

const AboutGroups = () => {
  const readerGroupsContent = (cont: GroupsCountent) => {
    return (
      <div className='bg-myyellowpale'>
        <div className='justify-center text-left'>
          <div className='mx-auto md:mx-10'>
            <div className='flex w-full flex-row justify-center md:flex-col'>
              <div className='my-[1em] aspect-[1/1] rounded-full bg-mywhite max-md:w-1/2'>
                <Image
                  src={cont.image}
                  width='200'
                  height='200'
                  alt='logo'
                  className='w-full object-cover'
                />
              </div>
              <p className='ml-3 w-1/2 py-6 md:ml-0 md:w-full md:py-0'>{cont.detail}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='mx-auto  w-full rounded-common p-[2em]'>
      <div className='mx-auto max-w-main'>
        <div className='flex flex-col items-center justify-center'>
          <div className='relative w-[4/7] '>
            <p className='text-h z-10 px-[0.5em] text-center after:absolute after:inset-0 after:z-[-10] after:h-[0.75em] after:translate-y-[1em] after:rounded-full after:bg-myyellow '>
              関わっている団体
            </p>
            <p className='m-6 break-words text-center'>
              当サイトは、デジタル技術を活用して地域課題の解決等に取り組むコミュニティ
              <br className='max-md:hidden' />
              「デジテック for YAMAGUCHI」の共創プロジェクトにより作成されました。
              <br className='max-md:hidden' />
              徳山高専の学生が中心となって開発を行いました。
            </p>
          </div>
        </div>
        <div className='flex flex-col md:flex-row'>
          {GroupsCountents.map((cont, indx) => (
            <div key={indx} className='md:w-1/3'>
              {readerGroupsContent(cont)}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutGroups
