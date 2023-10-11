import Image from 'next/image'
import React from 'react'

import { classNames } from '@/lib/classNames'
import { Post } from '@/types/Post'

type Props = {
  posts: Post[]
  minSize: 'small' | 'medium'
}

const PhotoGallary = ({ posts, minSize }: Props) => {
  return (
    <div
      // 画像サイズx9に、gapのサイズx8を足す
      className={classNames(
        'w-[110vw] bg-mywhite',
        minSize === 'small' ? 'min-w-[691px]' : 'min-w-[914px]',
      )}
    >
      <div className='grid grid-cols-9 gap-[2px] md:gap-[4px]'>
        {posts.slice(0, Math.min(18, posts.length)).map((post) => (
          <div
            key={post.id}
            className={classNames(
              'h-[12vw] w-[12vw]',
              minSize === 'small' ? 'min-h-[75px] min-w-[75px]' : 'min-h-[100px] min-w-[100px]',
            )}
          >
            <Image
              src={post.images[0]}
              alt=''
              width={150}
              height={150}
              className='h-full w-full object-cover object-center'
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default PhotoGallary
