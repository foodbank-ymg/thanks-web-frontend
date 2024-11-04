import FlagHeadline from '@/components/FlagHeadline'
import { cn } from '@/lib/utils'

const notes = [
  {
    headline: 'みなさまからのメッセージについて',
    listItems: [
      '皆様からのメッセージは、特定非営利活動法人市民活動さぽーとねっとがチェックをし、投稿して公開されます。',
    ],
  },
  {
    headline: '著作権について',
    listItems: [
      'サイト上のコンテンツ（テキスト、画像など）は著作権で保護されており、無断で複製、再配布、または転載することは禁止されています。',
      'コンテンツを使用したい場合は必ず事前にご連絡いただき、当法人の許可を得てください。',
    ],
  },
  {
    headline: '免責事項',
    listItems: [
      '予告無しに内容やアドレスを変更または削除する場合がありますので、あらかじめご了承ください。',
      '当サイトの利用は、利用者ご自身の責任において行われるものとします。当サイト上の掲載情報については、慎重に作成、管理しますが、すべての情報の正確性および完全性を保証するものではありません。あらかじめ、ご了承ください。',
      '当サイトから入手された情報により発生した問題・障害に対して、当サイトの開発・運営者はいかなる責任も負いません。',
    ],
  },
]

function SquareBulletList({ items, bgColor }: { items: string[]; bgColor: string }) {
  return (
    <ul className='my-5'>
      {items.map((item, index) => (
        <li key={index} className='my-3 flex items-start'>
          <span className={cn('mr-2 mt-2 inline-block size-2 shrink-0', bgColor)} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function AboutNotes() {
  return (
    <div className='space-y-8 bg-white p-[88px]'>
      {notes.map((note, index) => (
        <div key={index} className=''>
          <FlagHeadline headline={note.headline} bgColor='bg-primary' textColor='text-black' />
          <SquareBulletList items={note.listItems} bgColor='bg-orange-300' />
        </div>
      ))}
    </div>
  )
}
