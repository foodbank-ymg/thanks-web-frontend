import React from 'react'

type Props = {
  label: string
  onClick: () => void
}

const LinkButtonBrown = (props: Props) => {
  return (
    <div className='relative h-[48px] w-[260px] md:h-[64px] md:w-[350px]'>
      <button
        onClick={props.onClick}
        className='text-btn absolute z-20 flex h-[48px] w-[260px] items-center justify-center rounded-full border-mybrown bg-mybrown text-mywhite hover:bg-mywhite hover:text-mybrown md:h-[64px] md:w-[350px]'
      >
        {props.label}
      </button>
      <div className='absolute -bottom-2 z-10 h-[48px] w-[260px] rounded-full bg-mygray/40 md:h-[64px] md:w-[350px]' />
    </div>
  )
}

export default LinkButtonBrown
