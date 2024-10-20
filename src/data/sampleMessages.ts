import { messageStatus } from '@/consts/constants'
import { Message } from '@/types/Message'

export const sampleMessages: Message[] = Array.from({ length: 10 }).map((_, i) => {
  return {
    id: `20241020-10203${i}`,
    managerId: 'm0001',
    position: '受給された方',
    status: messageStatus.APPROVED,
    imageUrl: '/img/message-sample.png',
    isWorkingInProgress: false,
    createdAt: new Date(),
    approvedAt: new Date(),
    canceledAt: new Date(),
    publishedAt: new Date(),
  }
})
