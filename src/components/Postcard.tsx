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
      <div className='relative z-10 h-full w-full rounded-cardout bg-white'>
        <Link href={`/post/${post.id}`}>
          <div className='flex h-full w-full flex-row p-[1.25vw] sm:flex-col '>
            <div className='relative flex aspect-[1/1] w-[45%] overflow-hidden rounded-cardin sm:w-auto sm:pb-[5vw]'>
              <Image fill src={post.images[0]} alt='' className='object-cover' />
            </div>
            <div className='flex flex-col items-center bg-smile bg-contain bg-right-bottom bg-no-repeat sm:bg-left-bottom'>
              <div className='mx-auto max-w-[240px] pt-[1vw] pb-[3vw] text-center sm:text-left'>
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
