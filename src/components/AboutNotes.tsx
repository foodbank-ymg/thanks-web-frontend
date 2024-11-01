import FlagHeadline from '@/components/FlagHeadline'
import SquareBulletList from '@/components/SquareBulletList'

export default function AboutNotes() {
  return (
    <div className='h-[600px] bg-white p-[88px]'>
      <div className='mb-[32px]'>
        <FlagHeadline
          headline='みなさまからのメッセージについて'
          bgColor='bg-primary'
          textColor='text-black'
        />
        <SquareBulletList
          items={[
            '皆様からのメッセージは、特定非営利活動法人市民活動さぽーとねっとがチェックをし、投稿して公開されます。',
          ]}
          bgColor='bg-orange-300'
        />
      </div>
      <div className='mb-[32px]'>
        <FlagHeadline headline='著作権について' bgColor='bg-primary' textColor='text-black' />
        <SquareBulletList
          items={[
            'サイト上のコンテンツ（テキスト、画像など）は著作権で保護されており、無断で複製、再配布、または転載することは禁止されています。',
            'コンテンツを使用したい場合は必ず事前にご連絡いただき、当法人の許可を得てください。',
          ]}
          bgColor='bg-orange-300'
        />
      </div>
      <div className='mb-[32px]'>
        <FlagHeadline headline='免責事項' bgColor='bg-primary' textColor='text-black' />
        <SquareBulletList
          items={[
            '予告無しに内容やアドレスを変更または削除する場合がありますので、あらかじめご了承ください。',
            '当サイトの利用は、利用者ご自身の責任において行われるものとします。当サイト上の掲載情報については、慎重に作成、管理しますが、すべての情報の正確性および完全性を保証するものではありません。あらかじめ、ご了承ください。',
            '当サイトから入手された情報により発生した問題・障害に対して、当サイトの開発・運営者はいかなる責任も負いません。',
          ]}
          bgColor='bg-orange-300'
        />
      </div>
    </div>
  )
}
