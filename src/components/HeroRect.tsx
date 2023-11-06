import React from 'react'

import { classNames } from '@/lib/classNames'

type Props = {
  bgUrl: string
  children: React.ReactNode
}

const HeroRect = ({ bgUrl, children }: Props) => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgUrl})`,
        backgroundColor: 'rgba(255,255,255,0.4)',
        backgroundBlendMode: 'lighten',
      }}
      className={classNames('bg-cover bg-center')}
    >
      {/* 固定ヘッダーの高さ */}
      <div className='md:h-[100px]' />
      <div className='pt-2h pb-2h mx-auto w-full max-w-[640px] px-[16px]'>
        <div className='pt-2h pb-2h rounded-common bg-mywhite/80 px-[8px] sm:px-[64px]'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default HeroRect
