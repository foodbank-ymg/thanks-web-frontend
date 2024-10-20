import { sampleMessages } from './sampleMessages'

import { newFirestore } from '@/lib/firestore/firestore'
import { GetMessages as GetMessage } from '@/lib/firestore/message'
import { Message } from '@/types/Message'

export const GetApprovedMessages = async (): Promise<Message[]> => {
  if (
    process.env.NEXT_PUBLIC_APP_ENV === 'DEVELOPMENT' ||
    process.env.NEXT_PUBLIC_APP_ENV === 'PRODUCTION'
  ) {
    newFirestore()
    return GetMessage()
  } else {
    return sampleMessages
  }
}
