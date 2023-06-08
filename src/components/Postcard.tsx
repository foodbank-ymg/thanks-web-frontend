import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { Post } from '@/types/Post'

type Props = {
  posts: Post[]
  index: number
}

const Postcard = ({ posts, index }: Props) => {
  const post = posts[index]

  return (
    <div className='relative h-[450px] w-full bg-myyellowpale'>
      <div className='relative aspect-[2/1] sm:aspect-[9/13] sm:w-[300px]'>
        <div className='absolute bottom-0 left-0 h-full w-[95%] origin-bottom rotate-6 overflow-hidden rounded-3xl bg-gray-400 opacity-20 sm:w-full sm:origin-bottom-left'></div>
        <div className='relative z-10 h-full w-[95%] rounded-3xl bg-white sm:w-full'>
          <Link href={`/post/${post.id}`} className='absolute h-full w-full rounded-3xl bg-white'>
            <div className='flex h-full w-full flex-row p-3 sm:flex-col '>
              <div className='relative flex aspect-[1/1] h-auto w-[45%] overflow-hidden rounded-xl border bg-center sm:w-auto'>
                <Image fill src={post.images[0]} alt='' className='block object-cover' />
              </div>
              <div className='relative flex grow flex-col bg-smile bg-contain bg-right-bottom bg-no-repeat p-3 text-center max-sm:bg-60% sm:bg-left-bottom'>
                <div className='p-3'>
                  <p className=' text-mybrown max-sm:top-1/4 sm:flex'>{post.subject}</p>
                </div>
                <p className='absolute bottom-[20%] left-1/2 -translate-x-1/2 text-myyellow sm:bottom-0'>
                  {post.createdAt}
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Postcard
