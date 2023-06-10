import Link from 'next/link'
import React from 'react'

import Postcard from '@/components/Postcard'
import { Post } from '@/types/Post'

type Props = {
  posts: Post[]
}

const PostList = ({ posts }: Props) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      {posts.map((post, idx) => (
        // <Link key={idx} href={`/post/${post.id}}`}>
        <Postcard key={idx} posts={posts} index={idx} />
        // </Link>
      ))}
    </div>
  )
}

export default PostList
