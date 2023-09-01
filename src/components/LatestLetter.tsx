import React from 'react'

import Postcard from './Postcard'

import { classNames } from '@/lib/classNames'
import { Post } from '@/types/Post'

type Props = {
  posts: Post[]
}

const LatestLetter = ({ posts }: Props): JSX.Element => {
  return (
    <>
      <div className='pt-h pb-2h bg-myyellow px-[28px] sm:mr-[15vw] sm:rounded-r-common sm:px-[40px] md:block'>
        <div className='mx-auto max-w-[360px] pb-[24px] sm:ml-0 sm:w-[29vw]'>
          <h2 className='text-hb inline-block pb-[8px]'>最近のおたより</h2>
          <div className='max-w-[320px] '>
            みなさまあてに新しく届いた&quot;ありがとう&quot;がみなさまに読まれることを待っています
          </div>
        </div>
        {/* PCは3つ横並び */}
        {/* <div className='grid w-[100vw] grid-flow-col grid-cols-2 pl-[50px] pb-2 xl:grid-cols-3 xl:pt-28'> */}
        <div className='hidden gap-x-[3.5vw] sm:flex'>
          {posts.slice(0, 3).map((_, idx) => (
            <div key={idx} className={classNames(idx % 2 === 1 && 'translate-y-[-6vw]')}>
              <Postcard posts={posts} index={idx} />
            </div>
          ))}
        </div>
        {/* スマホはカルーセル方式 */}
        {/* TODO: 後でやる */}
        <div className='h-[300px] w-full sm:hidden'>
          {/* <Carousel
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
            showArrows={false}
            infiniteLoop
            autoPlay
            interval={5000}
            transitionTime={1000}
            className='h-[300px] w-full'
          >
            {posts.map((_, idx) => (
              <div key={idx} className='h-[300px] w-full'>
                <Postcard posts={posts} index={idx} />
              </div>
            ))}
          </Carousel> */}
        </div>
      </div>
    </>
  )
}

export default LatestLetter
