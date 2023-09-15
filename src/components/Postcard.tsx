import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { Post } from '@/types/Post'

type Props = {
  posts: Post[]
  index: number
  forceVertical?: boolean
}

const Postcard = ({ posts, index }: Props) => {
  const post = posts[index]

  return (
    <div className='relative max-w-[360px] md:w-[28vw]'>
      <div className='relative z-10 h-full w-full rounded-cardout bg-white max-sm:p-[.75em]'>
        <Link href={`/post/${post.id}`}>
          <div className='flex h-full w-full flex-row sm:flex-col sm:p-[1.25vw]'>
            <div className='relative flex aspect-[1/1] w-[45%] overflow-hidden rounded-cardin sm:w-auto sm:pb-[5vw]'>
              <Image fill src={post.images[0]} alt='' className='object-cover' />
            </div>
            <div className='flex flex-col items-center bg-smile bg-right-bottom bg-no-repeat max-sm:w-[55%] max-sm:bg-60% max-sm:pl-[.75em] sm:bg-contain sm:bg-left-bottom'>
              <div className='mx-auto flex max-w-[240px] pt-[1vw] pb-[3vw] text-left max-sm:h-[80%] max-sm:items-center max-sm:justify-center sm:text-center'>
                <p className='text-posth'>{post.subject}</p>
              </div>
              <p className='text-postd text-myyellow sm:bottom-0'>{post.recipientGroupName}</p>
            </div>
          </div>
        </Link>
      </div>
      <div className='absolute bottom-0 left-0 h-full w-full origin-bottom-left rotate-[5deg] rounded-cardout bg-mygraydark/10'></div>
    </div>
  )
}
export default Postcard
