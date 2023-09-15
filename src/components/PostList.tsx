import Link from 'next/link'
import React from 'react'

import Postcard from '@/components/Postcard'
import { Post } from '@/types/Post'

type Props = {
  posts: Post[]
}

const PostList = ({ posts }: Props) => {
  return (
    <div className='pt-h grid grid-cols-1 max-md:gap-y-10 max-sm:px-2 sm:pl-8 md:grid-cols-2 md:gap-y-8 lg:grid-cols-3'>
      {posts.map((post, idx) => (
        // <Link key={idx} href={`/post/${post.id}}`}>
        <Postcard key={idx} posts={posts} index={idx} />
        // </Link>
      ))}
    </div>
  )
}

export default PostList
