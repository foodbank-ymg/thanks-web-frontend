import Image from 'next/image'
import React from 'react'

import AboutHeadline from '@/components/AboutHeadline'
import { EventClickCongrant, event } from '@/lib/gtag'

const Donation = () => {
  return (
    <div className='mx-auto my-[2em] max-w-screen-lg px-[32px] pb-[32px]'>
      <AboutHeadline title='寄付のお願い' />
      {/* イメージと文章の2段組み */}
      <div className='my-[32px] mx-auto flex max-w-[720px] flex-col gap-[16px] md:flex-row'>
        {/* 左島 */}
        <div className='text-left'>
          <p>
            NPO法人フードバンク山口は、個人や企業などからこれまで約206トンの食品を受入れ、必要な方にお届けしてきました。（2017年〜2023年3月末時点）
            <br />
            食品ロス削減と経済的な不安を抱える方々への食支援に、フードバンクの担う役割は日増しに大きくなってきています。
            <br />
            206トンもの食品を責任もって循環させるためには、スタッフを雇用したり、保管場所の維持管理にも費用がかかります。
            <br />
            「もったいないをありがとうへ」のサイクルを回し続けるために、運営資金のご寄付をお願いいいたします。
          </p>
        </div>
        {/* 右島　*/}
        <div className='mx-auto max-w-[300px]'>
          <iframe
            src='https://congrant.com/project_iframe/foodbank-ymg/8052'
            width='300'
            height='300'
            onClick={() => event(EventClickCongrant)}
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Donation
