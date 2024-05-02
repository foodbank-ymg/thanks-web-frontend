import React from 'react'

type AboutHeadlineProps = {
  title: string
}

const AboutHeadline = (props: AboutHeadlineProps) => {
  return (
    <div className='text-h w-full justify-center text-center'>
      <div className='relative mx-auto max-w-[600px] max-md:max-w-[200px]'>
        <p className='z-10 px-[0.5em] after:absolute after:inset-0 after:-z-10 after:h-[0.75em] after:translate-y-[1em] after:justify-items-stretch after:rounded-full after:bg-myyellow md:min-w-[480px]'>
          {props.title}
        </p>
      </div>
    </div>
  )
}

export default AboutHeadline
