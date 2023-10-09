import Image from 'next/image'
import React from 'react'

import { classNames } from '@/lib/classNames'

type DescContent = {
  image: string
  title: string
  description: string
}

const descContents: DescContent[] = [
  {
    image: '/img/hero-rect-bg.jpg',
    title:
      'あいうえおかきくけこ。あいうえおかきくけこ。あいうえおかきくけこ。あいうえおかきくけこ。',
    description:
      'あいうえおかきくけこ。あいうえおかきくけこ。あいうえおかきくけこ。あいうえおかきくけこ。あいうえおかきくけこ。あいうえおかきくけこ。あいうえおかきくけこ。',
  },
  {
    image: '/img/hero-rect-bg.jpg',
    title:
      'あいうえおかきくけこ。あいうえおかきくけこ。あいうえおかきくけこ。あいうえおかきくけこ。',
    description:
      'あいうえおかきくけこ。あいうえおかきくけこ。あいうえおかきくけこ。あいうえおかきくけこ。あいうえおかきくけこ。あいうえおかきくけこ。あいうえおかきくけこ。',
  },
]

const AboutDescription = () => {
  const renderDescContent = (cont: DescContent, orderIndx: number) => {
    return (
      <div
        className={classNames(
          'flex w-full pb-[5em] max-md:flex-col',
          orderIndx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse',
        )}
      >
        <div className='max-md:w-full md:w-1/2'>
          <Image
            src={cont.image}
            width={1280}
            height={1280}
            alt=''
            className='aspect-[1/1] object-cover'
          />
        </div>
        <div className='h-auto max-md:w-full md:w-1/2'>
          <div className='text-left'>
            <h2>{cont.title}</h2>
            <p>{cont.description}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='bg-myyellowpale'>
      <div className='rounded-common bg-white p-[5em]'>
        {descContents.map((cont, indx) => (
          <div key={indx}>{renderDescContent(cont, indx)}</div>
        ))}
      </div>
    </div>
  )
}

export default AboutDescription
