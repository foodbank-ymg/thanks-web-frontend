import { samplePosts } from './samplePosts'

import { newFirestore } from '@/lib/firestore/firestore'
import { GetPosts as fsGetPost } from '@/lib/firestore/post'
import { Post } from '@/types/Post'

export const GetPosts = async (): Promise<Post[]> => {
  if (
    process.env.NEXT_PUBLIC_APP_ENV === 'DEVELOPMENT' ||
    process.env.NEXT_PUBLIC_APP_ENV === 'PRODUCTION'
  ) {
    newFirestore()
    return fsGetPost()
  } else {
    return samplePosts
  }
}
