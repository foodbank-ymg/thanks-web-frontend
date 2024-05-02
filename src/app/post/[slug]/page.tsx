import { Suspense } from 'react'

import PostContent from '@/components/PostContent'
import { GetApprovedPosts } from '@/data/posts'

export const generateStaticParams = async () => {
  let posts = await GetApprovedPosts()
  return posts.map((post) => {
    return {
      slug: post.id,
    }
  })
}

const PostPage = async ({ params }: { params: { slug: string } }) => {
  const id = params.slug as string
  const posts = await GetApprovedPosts()

  return (
    <Suspense fallback={<></>}>
      <PostContent id={id} posts={posts} />
    </Suspense>
  )
}

export default PostPage
