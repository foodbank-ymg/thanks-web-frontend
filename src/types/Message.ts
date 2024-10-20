import { messageStatusType } from '@/consts/constants'

export type Message = {
  id: string
  managerId: string
  position: string
  status: messageStatusType
  imageUrl: string
  isWorkingInProgress: boolean
  createdAt: Date
  approvedAt: Date
  canceledAt: Date
  publishedAt: Date
}
