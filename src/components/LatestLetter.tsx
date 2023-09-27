import Image from 'next/image'
import React, { useState } from 'react'

import Postcard from './Postcard'

import { classNames } from '@/lib/classNames'
import { Post } from '@/types/Post'

const CARD_QUANTITY = 3

type Props = {
  posts: Post[]
}

const LatestLetter = ({ posts }: Props): JSX.Element => {
  // インデックス番号の初期値は、最も直近のカードをセンターに持ってくる
  const [cardIndex, setCardIndex] = useState<number>(CARD_QUANTITY - 1)

  return (
    <>
      <div className='pt-h pb-2h overflow-hidden bg-myyellow px-[28px] sm:mr-[15vw] sm:overflow-visible sm:rounded-r-common sm:px-[40px] md:block'>
        <div className='mx-auto max-w-[360px] pb-[24px] sm:ml-0 sm:w-[29vw]'>
          <h2 className='text-hb inline-block pb-[8px]'>最近のおたより</h2>
          <div className='max-w-[320px] '>
            みなさまあてに新しく届いた&quot;ありがとう&quot;がみなさまに読まれることを待っています
          </div>
        </div>
        {/* 3つ横並びでスマホは左右が見切れる */}
        <div className=' flex w-[200vw] translate-x-[-58vw] gap-x-[5dw] sm:w-full sm:translate-x-0 sm:gap-x-[3.5vw]'>
          {posts.slice(0, CARD_QUANTITY).map((_, idx) => (
            <div
              key={idx}
              className={classNames('flex-1', idx % 2 === 1 && 'sm:translate-y-[-6vw]')}
            >
              <Postcard
                posts={posts}
                index={(idx + cardIndex) % CARD_QUANTITY}
                isMobileHorizontal={false}
              />
            </div>
          ))}
        </div>
        {/* スマホはカルーセル方式で入れ替えるボタンを配置 */}
        <div className='my-[8px] mx-auto flex w-full max-w-[320px] items-center justify-around sm:hidden'>
          <button
            onClick={() => {
              setCardIndex(cardIndex === 0 ? CARD_QUANTITY - 1 : cardIndex - 1)
            }}
          >
            <Image src='/img/arrow-left.svg' alt='' width={44} height={44} />
          </button>
          <div className='flex gap-x-[12px]'>
            {Array.from(Array(CARD_QUANTITY)).map((_, idx) => (
              // カードと同じインデックス番号がカレントになる
              <div
                className={classNames(
                  'h-[12px] w-[12px] rounded-full',
                  idx === (cardIndex + 1) % CARD_QUANTITY ? 'bg-mybrown' : 'bg-mywhite',
                )}
                key={idx}
              />
            ))}
          </div>
          <button
            onClick={() => {
              setCardIndex(cardIndex === CARD_QUANTITY - 1 ? 0 : cardIndex + 1)
            }}
          >
            <Image src='/img/arrow-right.svg' alt='' width={44} height={44} />
          </button>
        </div>
      </div>
    </>
  )
}

export default LatestLetter
