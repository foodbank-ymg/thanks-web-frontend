import FlagHeadline from '@/components/FlagHeadline'

export default function AboutOrganizations() {
  return (
    <div className='h-[1000px] bg-gray-200 p-[88px] flex flex-col justify-start'>
      <div className=' w-8/10 p-6 mb-6 space-y-6 text-left'>
        <FlagHeadline
          headline='このサイトに関わっている団体'
          bgColor='bg-primary'
          textColor='text-black'
        />

        <ul>
          <li>当サイトは、デジタル技術を活用して地域課題の解決等に取り組むコミュニティ「デジテック for</li>
          <li>YAMAGUCHI」の饗応プロジェクトにより作成されました。徳山高専の学生が中心となって開発を行いま</li>
          <li>した。</li>
        </ul>
      </div>

      <div className='flex justify-center items-start w-8/10 p-2 '>
        <div className='flex flex-col'>
          <div className="flex justify-between h-1/2">

            <div className="flex flex-col justify-start w-2/3 p-6 space-y-4 rounded-lg text-center">
              <div className="border-2 border-gray-300 rounded-lg w-64 h-40 flex items-center justify-center bg-gray-200">
                <p className="text-gray-500">画像がここに入ります</p>
              </div>
              <p>情報電子工学科の学生融資二名がLINEの機能を活用した投稿システム・OCR技術を活用し,Webサイト開発に挑戦。</p>
            </div>

            <div className="flex flex-col justify-start w-2/3 p-6 space-y-4 rounded-lg text-center">
              <div className="border-2 border-gray-300 rounded-lg w-64 h-40 flex items-center justify-center bg-gray-200">
                <p className="text-gray-500">画像がここに入ります</p>
              </div>
              <p>あああああああああああああああああああああああああああああああああああああああああああああ</p>
            </div>

            <div className="flex flex-col justify-start w-2/3 p-6 space-y-4 rounded-lg text-center">
              <div className="border-2 border-gray-300 rounded-lg w-64 h-40 flex items-center justify-center bg-gray-200">
                <p className="text-gray-500">画像がここに入ります</p>
              </div>
              <p>徳山高専の学生や特定非営利活動法人市民活動サポートねっとなど「デジテックfor YAMAGUCHI」の会員同士による地域課題等の解決に挑戦する活動を促進</p>
            </div>

          </div>
        </div>
        
      </div>

      <div className='flex justify-center items-center w-8/10 p-2'>
        <div className='border-2 border-black rounded-xl w-3/4  h-64 p-6'>
          <p>OSSの案内</p>
        </div>
      </div>
      
    </div>
  )
}
