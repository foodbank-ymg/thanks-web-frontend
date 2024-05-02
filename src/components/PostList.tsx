import React from 'react'

import Postcard from '@/components/Postcard'
import { Post } from '@/types/Post'

type Props = {
  posts: Post[]
}

const PostList = ({ posts }: Props) => {
  return (
    <div className='mx-auto max-w-screen-2xl'>
      <div className='pt-h grid grid-cols-1 gap-[1em] max-md:px-[8px] sm:grid-cols-2 sm:px-[32px] md:grid-cols-3 xl:grid-cols-4'>
        {posts.map((_, idx) => (
          <Postcard key={idx} posts={posts} index={idx} isMobileHorizontal={true} />
        ))}
      </div>
    </div>
  )
}

export default PostList
