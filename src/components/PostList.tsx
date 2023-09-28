import Link from 'next/link'
import React from 'react'

import Postcard from '@/components/Postcard'
import { Post } from '@/types/Post'

type Props = {
  posts: Post[]
}

const PostList = ({ posts }: Props) => {
  return (
    <div className='pt-h grid grid-cols-1 gap-[1em] max-md:px-[8px] sm:grid-cols-3 sm:px-[32px]'>
      {posts.map((_, idx) => (
        <Postcard key={idx} posts={posts} index={idx} isMobileHorizontal={true} />
      ))}
    </div>
  )
}

export default PostList
