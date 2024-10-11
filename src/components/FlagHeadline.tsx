import { cn } from '@/lib/utils'

export default function FlagHeadline({
  headline,
  textColor,
  bgColor,
}: {
  headline: string
  textColor: string
  bgColor: string
}) {
  return (
    <div>
      <div className={cn('relative inline-block px-4 py-1', bgColor, textColor)}>
        <div
          className={cn(
            'absolute right-0 top-0 z-10 aspect-[1/2] h-full translate-x-full',
            bgColor,
          )}
          style={{ clipPath: 'polygon(0% 0%, 100% 0%, 40% 50%, 100% 100%, 0 100%)' }}
        ></div>
        <h2 className='text-lg font-bold'>{headline}</h2>
      </div>
    </div>
  )
}
