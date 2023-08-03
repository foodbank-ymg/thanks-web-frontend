import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { getDateString } from '../data/date'
import { ILetter } from '../types/letter'

type Props = {
  slidePercentage: number
  newsList: ILetter[]
}

const LetterCarousel = ({ slidePercentage, newsList }: Props): JSX.Element => {
  return (
    <Carousel
      autoPlay={true}
      interval={6000}
      infiniteLoop={true}
      showStatus={false}
      centerMode={true}
      centerSlidePercentage={slidePercentage}
      transitionTime={1000}
      // onChange={onChange}
      showThumbs={false}
      // renderIndicator: (onClickHandler, isSelected, index, label) => {
      //   return <></>
      // },
    >
      {newsList &&
        newsList.map((news, idx) => (
          <div key={idx} className='mx-3'>
            <Link href={`/news/${news.id}`} passHref>
              <p className='relative mb-12 flex h-52 w-full overflow-hidden rounded-xl sm:h-64'>
                <div className='absolute z-0 object-center'>
                  <Image
                    src={news.thumbnail}
                    alt={`${news.title}のサムネイル`}
                    width='1200'
                    height='630'
                  />
                </div>
                <div className='z-1 h-full w-full overflow-hidden rounded-xl bg-black opacity-40' />
                <div className='z-2 text-text-white absolute bottom-0 flex-col px-8 py-4 text-left lg:px-4'>
                  <p className='text-md font-bold lg:text-xl'>{news.title}</p>
                  <p className='font-ligth mt-0.5 text-xs'>{news.description}</p>
                  <p className='mt-0.5 text-xs font-light'>{getDateString(new Date(news.date))}</p>
                </div>
              </p>
            </Link>
          </div>
        ))}
    </Carousel>
  )
}

export default LetterCarousel
