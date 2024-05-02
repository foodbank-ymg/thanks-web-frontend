import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { classNames } from '@/lib/classNames'
import { Post } from '@/types/Post'

type Props = {
  posts: Post[]
  index: number
  isMobileHorizontal: boolean
}

const Postcard = ({ posts, index, isMobileHorizontal }: Props) => {
  const post = posts[index]

  return (
    <div
      className={classNames(
        'w-full p-0 px-[16px] sm:pb-[24px]',
        !isMobileHorizontal && 'sm:w-[28vw] sm:max-w-[360px] sm:px-0',
      )}
    >
      <div className={classNames('relative mx-auto sm:aspect-[360/550] sm:max-w-[360px]')}>
        <div className='relative z-10 size-full gap-[16px] rounded-cardouts bg-white sm:rounded-cardoutl'>
          <Link href={`/post/${post.id}`}>
            <div
              className={classNames(
                'pcard flex h-full w-full sm:flex-col',
                isMobileHorizontal ? 'flex-row' : 'flex-col',
              )}
            >
              <div
                className={classNames(
                  'relative flex aspect-[1/1] overflow-hidden rounded-cardins sm:w-auto sm:rounded-cardinl',
                  isMobileHorizontal ? 'w-[45%]' : 'w-auto pb-[5vw]',
                )}
              >
                <Image fill src={post.images[0]} alt='' className='object-cover' />
              </div>
              <div
                className={classNames(
                  'flex flex-col items-center justify-around bg-smile bg-60% bg-right-bottom bg-no-repeat sm:w-full sm:flex-1 sm:justify-between sm:bg-left-bottom',
                  isMobileHorizontal
                    ? 'w-[55%] pl-[.75em] sm:px-[1.5vw]'
                    : 'mt-[0.75em] min-h-[25vw] sm:min-h-0',
                )}
              >
                <div
                  className={classNames(
                    'mx-auto flex items-center justify-center text-left sm:w-full sm:text-center',
                    isMobileHorizontal ? 'mb-[1.5vw] text-center sm:mt-[1.5vw]' : '',
                  )}
                >
                  <p className='text-posth text-center'>{post.subject}</p>
                </div>
                <p className='text-postd text-myyellow'>{post.recipientGroupName}</p>
              </div>
            </div>
          </Link>
        </div>
        <div
          className={classNames(
            'absolute left-0 h-full w-full origin-bottom-left rotate-[5deg] rounded-cardouts bg-black/10 sm:bottom-0 sm:rounded-cardoutl',
            isMobileHorizontal ? 'bottom-3' : 'bottom-0',
          )}
        ></div>
      </div>
    </div>
  )
}
export default Postcard
