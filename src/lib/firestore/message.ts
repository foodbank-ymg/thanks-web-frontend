import { DocumentData, QueryDocumentSnapshot } from 'firebase-admin/firestore'

import { db } from './firestore'

import { messageStatus } from '@/consts/constants'
import { Message } from '@/types/Message'

export const GetMessages = async () => {
  let message: Message[] = []
  ;(
    await db
      .collection('messages')
      .where('status', '==', messageStatus.APPROVED)
      .orderBy('approvedAt', 'desc')
      .withConverter<Message>(messageConverter)
      .get()
  ).forEach((doc) => {
    message.push(doc.data())
  })
  return message
}

const messageConverter = {
  toFirestore(message: Message): DocumentData {
    return {
      id: message.id,
      managerId: message.managerId,
      position: message.position,
      status: message.status,
      imageUrl: message.imageUrl,
      isWorkingInProgress: message.isWorkingInProgress,
      createdAt: message.createdAt,
      approvedAt: message.approvedAt,
      canceledAt: message.canceledAt,
      publishedAt: message.publishedAt,
    }
  },
  fromFirestore(snapshot: QueryDocumentSnapshot): Message {
    const data = snapshot.data()!
    return {
      id: data.id,
      managerId: data.managerId,
      position: data.position,
      status: data.status,
      imageUrl: data.imageUrl,
      isWorkingInProgress: data.isWorkingInProgress,
      createdAt: data.createdAt.toDate(),
      approvedAt: data.approvedAt ? data.approvedAt.toDate() : null,
      canceledAt: data.canceledAt ? data.canceledAt.toDate() : null,
      publishedAt: data.publishedAt ? data.publishedAt.toDate() : null,
    }
  },
}
