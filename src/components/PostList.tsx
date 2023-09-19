import Link from 'next/link'
import React from 'react'

import Postcard from '@/components/Postcard'
import { Post } from '@/types/Post'

type Props = {
  posts: Post[]
}

const PostList = ({ posts }: Props) => {
  return (
    <div className='pt-h grid grid-cols-1 max-md:gap-y-10 max-md:px-2 sm:grid-cols-3 sm:gap-y-8 sm:pl-8'>
      {posts.map((post, idx) => (
        // <Link key={idx} href={`/post/${post.id}}`}>
        <Postcard key={idx} posts={posts} index={idx} />
        // </Link>
      ))}
    </div>
  )
}

export default PostList
