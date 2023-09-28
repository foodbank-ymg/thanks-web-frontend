import Image from 'next/image'
import React from 'react'

const AboutGroups = () => {
  return (
    <div className='my-10 h-auto  bg-myyellowpale text-center'>
      <div className='flex flex-col items-center justify-center'>
        <div className='w-3/5'>
          <p className='mb-3 text-xl'>関わっている団体</p>
          <div className='mt-[-20px] mb-6 rounded-full border-[12px] border-solid border-myyellow'></div>
          <p className='mb-6 break-words'>
            当サイトは、デジタル技術を活用して地域課題の解決等に取り組むコミュニティ「デジテック for
            YAMAGUCHI」の共創プロジェクト二より作成されました。徳山高専の学生が中心となって開発を行いました。
          </p>
        </div>
      </div>

      <div className='flex flex-col justify-center text-left lg:flex-row'>
        <div className='mx-10  lg:w-1/3'>
          <div className='flex  flex-row justify-center lg:flex-col'>
            <Image
              src='/img/hero-fb-mark.svg'
              width='100'
              height='100'
              alt='logo'
              className='w-1/2 lg:w-full'
            />
            <p className='ml-5 w-full pt-8  lg:ml-0 lg:pt-0'>
              情報電子工学科の学生有志3名が、LINEの機能を活用した記事投稿システムおよびWebサイト開発に挑戦。
            </p>
          </div>
        </div>

        <div className='mx-10  lg:w-1/3'>
          <div className='flex flex-row justify-center lg:flex-col'>
            <Image
              src='/img/hero-fb-mark.svg'
              width='100'
              height='100'
              alt='logo'
              className='w-1/2 lg:w-full'
            />
            <p className='ml-5 w-full pt-8  lg:ml-0 lg:pt-0'>
              食品を受け取った方の感謝の思いや日々の活動の情報などをより多くの方に発信し、更なる支援を創出。
            </p>
          </div>
        </div>

        <div className='mx-10  lg:w-1/3 '>
          <div className='flex flex-row justify-center lg:flex-col'>
            <Image
              src='/img/hero-fb-mark.svg'
              width='100'
              height='100'
              alt='logo'
              className='w-1/2 lg:w-full'
            />
            <p className='ml-5 w-full pt-8  lg:ml-0 lg:pt-0'>
              徳山高専の学生やフードバンク山口など「デジテック for
              YAMAGUCHI」の会員同士による地域課題等の解決に挑戦する活動を促進。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutGroups
