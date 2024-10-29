import { cn } from '@/lib/utils'

export default function SquareBulletList({ items, bgColor }: { items: string[]; bgColor: string }) {
  return (
    <ul className='my-5'>
      {items.map((item, index) => (
        <li key={index} className='my-3 flex items-start'>
          <span className={cn('mr-2 mt-2 inline-block size-2 shrink-0', bgColor)} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}
