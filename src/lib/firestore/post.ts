import { DocumentData, QueryDocumentSnapshot } from 'firebase-admin/firestore'
import moment from 'moment'

import { db } from './firestore'

import { postStatus } from '@/consts/constants'
import { Post } from '@/types/Post'

export const GetPosts = async () => {
  let post: Post[] = []
  ;(
    await db
      .collection('posts')
      .where('status', '==', postStatus.APPROVED)
      .orderBy('approvedAt', 'desc')
      .withConverter<Post>(postConverter)
      .get()
  ).forEach((doc) => {
    post.push(doc.data())
  })
  return post
}

export const getWorkingPostByRecipientId = async (id: string) => {
  let post = undefined
  ;(
    await db
      .collection('posts')
      .where('recipientId', '==', id)
      .where('isRecipientWorking', '==', true)
      .withConverter<Post>(postConverter)
      .get()
  ).forEach((doc) => {
    post = doc.data()
  })
  return post as Post | undefined
}

const postConverter = {
  toFirestore(post: Post): DocumentData {
    return {
      id: post.id,
      recipientGroupName: post.recipientGroupName,
      subject: post.subject,
      body: post.body,
      images: post.images,
      createdAt: post.createdAt,
    }
  },
  fromFirestore(snapshot: QueryDocumentSnapshot): Post {
    const data = snapshot.data()!
    return {
      id: data.id,
      recipientGroupName: data.recipientGroupName,
      subject: data.subject,
      body: data.body,
      images: data.images.map(
        (image: string) => `${process.env.IMAGE_BASE_URL}/${encodeURIComponent(image)}`,
      ),
      createdAt: moment(data.createdAt.toDate()).utcOffset(9).format('YYYY.MM.DD'),
    }
  },
}
