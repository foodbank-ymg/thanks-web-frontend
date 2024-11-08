import FlagHeadline from '@/components/FlagHeadline'
import { text } from 'stream/consumers'

const organizations = [
  {
    organizationURL: 'a',
    organizationText:
      '情報電子工学科の学生融資二名がLINEの機能を活用した投稿システム・OCR技術を活用し、Webサイト開発に挑戦。',
  },
  {
    organizationURL: 'a',
    organizationText:
      '情報電子工学科の学生融資二名がLINEの機能を活用した投稿システム・OCR技術を活用し、Webサイト開発に挑戦。',
  },
  {
    organizationURL: 'a',
    organizationText:
      '情報電子工学科の学生融資二名がLINEの機能を活用した投稿システム・OCR技術を活用し、Webサイト開発に挑戦。',
  },
]

export default function AboutOrganizations() {
  return (
    <div className='flex flex-col justify-start bg-gray-200 p-[88px]'>
      <div className=' mb-6 space-y-6 p-6 text-left'>
        <FlagHeadline
          headline='このサイトに関わっている団体'
          bgColor='bg-primary'
          textColor='text-black'
        />

        <ul>
          <li>
            当サイトは、デジタル技術を活用して地域課題の解決等に取り組むコミュニティ「デジテック for
          </li>
          <li>
            YAMAGUCHI」の饗応プロジェクトにより作成されました。徳山高専の学生が中心となって開発を行いま
          </li>
          <li>した。</li>
        </ul>
      </div>

      <div className='key ={organizations.id} flex justify-between'>
        {organizations.map((organizations, index) => (
          <div className='flex flex-col space-y-4 rounded-lg p-5 ' key ={index} >
            <div className='flex h-40 w-128 items-center justify-center rounded-lg border-2 border-gray-300 bg-gray-200'>
              <p className='text-gray-500'>画像がここに入ります</p>
            </div>
            <p>{organizations.organizationText}</p>
          </div>//画像はorganizationURLを挟んで表示させる
        ))}
      </div>

      <div className='flex items-center justify-center p-2'>
        <div className='w-3/4 rounded-xl border-2  border-black p-6'>
          <p>OSSの案内</p>
        </div>
      </div>
    </div>
  )
}
