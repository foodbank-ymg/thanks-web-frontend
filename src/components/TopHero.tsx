import Image from 'next/image'

import { Message } from '@/types/Message'

export default function TopHero({ messages }: { messages: Message[] }) {
  return (
    <div className='flex flex-col items-center justify-center bg-primary'>
      <p className='text-hb flex flex-col items-center py-36'>
        「お互いさまのきもち」を応援
        <br />
        みんなの冷蔵庫
        <br />
      </p>
      <h1>防府コミュニティフリッジ</h1>

      <ul className='my-8 flex flex-wrap'>
        {messages.map((message) => (
          <li
            key={message.id}
            className='relative aspect-[680/510] w-full bg-white/50 p-8 sm:w-1/2 lg:w-1/4'
          >
            <Image src={message.imageUrl} fill alt='' />
          </li>
        ))}
      </ul>
    </div>
  )
}
