import Image from 'next/image'
import React from 'react'

const Donation = () => {
  return (
    <div className='px-[2.5em]'>
      <div className='mx-auto py-[2.5em]'>
        <div className='mx-auto grid h-auto w-full rounded-b-common text-center'>
          <div className='pt-h pb-h'>
            <div className='mx-auto flex-col px-[0.5em]'>
              <div className='text-h w-full justify-center text-center'>
                <div className='relative mx-auto max-w-[960px] max-md:max-w-[200px] md:w-[65%]'>
                  <p className='z-10 px-[0.5em] after:absolute after:inset-0 after:z-[-10] after:h-[0.75em] after:translate-y-[1em] after:justify-items-stretch after:rounded-full after:bg-myyellow md:min-w-[480px]'>
                    {/*タイトル*/}
                    寄付のお願い
                  </p>
                </div>
              </div>
              {/*元々max-w-[600px] */}
              <div className='my-[32px] mx-auto grid max-w-[700px] grid-flow-row gap-[1em]'>
                {/* イメージと文章の2段組み */}
                <div className='flex flex-col items-center gap-[5%] md:flex-row'>
                  {/* 左島 */}
                  <div className='md:w-[60%]'>
                    <p>
                      NPO法人フードバンク山口は、個人や企業などからこれまで約206トンの食品を受入れ、必要な方にお届けしてきました。（2017年〜2023年3月末時点）食品ロス削減と経済的な不安を抱える方々への食支援に、フードバンクの担う役割は日増しに大きくなってきています。206トンもの食品を責任もって循環させるためには、スタッフを雇用したり、保管場所の維持管理にも費用がかかります。「もったいないをありがとうへ」のサイクルを回し続けるために、運営資金のご寄付をお願いいいたします。
                    </p>
                  </div>
                  {/* 右島　*/}
                  <div className='my-4 text-left md:w-[40%]'>
                    <iframe
                      src='https://congrant.com/project_iframe/foodbank-ymg/8052'
                      width='300'
                      height='300'
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Donation
