import Link from 'next/link'
import React from 'react'

type Props = {
  label: string
  href: string
}

const LinkButtonYellow = (props: Props) => {
  return (
    <div className='relative h-[48px] w-[260px] md:h-[64px] md:w-[350px]'>
      <Link
        href={props.href}
        className='text-btn absolute z-20 flex h-[48px] w-[260px] items-center justify-center rounded-full border-mybrown bg-myyellow hover:bg-mybrown hover:text-mywhite md:h-[64px] md:w-[350px]'
      >
        {props.label}
      </Link>
      <div className='absolute -bottom-2 z-10 h-[48px] w-[260px] rounded-full bg-mygray/40 md:h-[64px] md:w-[350px]' />
    </div>
  )
}

export default LinkButtonYellow
