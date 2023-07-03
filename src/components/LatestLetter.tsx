import { GetStaticProps } from 'next'
import { imageConfigDefault } from 'next/dist/shared/lib/image-config'
import Image from 'next/image'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'

import { getNewsAll } from '../../_letter/news'
import { ILetter } from '../types/letter'

import LetterCarousel from './LetterCarousel'
import Postcard from './Postcard'

import { samplePosts } from '@/data/samplePosts'
import { Post } from '@/types/Post'

type Props = {
  posts: Post[]
  index: number
  allLeter: ILetter[]
}

const LatestLetter = ({ allLeter }: Props): JSX.Element => {
  return (
    <div className=''>
      <div className='bg-myyellow max-md:hidden md:w-[80%] md:rounded-r-large md:bg-mail md:bg-right-top md:bg-no-repeat xl:relative'>
        <div className='hidden pl-[50px] md:block xl:absolute'>
          <div className='pt-[75px] text-h2 text-mybrown'>最近のおたより</div>
          <div className='max-w-[320px] py-7 text-desc'>
            みなさまあてに新しく届いた&quot;ありがとう&quot;がみなさまに読まれることを待っています
          </div>
        </div>
        <div className='grid w-[100vw] grid-flow-col grid-cols-2 pl-[50px] pb-2 max-md:hidden xl:grid-cols-3 xl:pt-28'>
          <div className='xl:row-start-2 xl:row-end-7'>
            <Postcard posts={samplePosts} index={0} />
          </div>
          <div className='xl:row-start-1 xl:row-end-6'>
            <Postcard posts={samplePosts} index={0} />
          </div>
          <div className='hidden xl:row-start-2 xl:row-end-7 xl:block'>
            <Postcard posts={samplePosts} index={0} />
          </div>
        </div>
        <div className='md:hidden'>
          <LetterCarousel
            slidePercentage={115}
            newsList={allLeter.filter((letter) => letter.isRecommended)}
          />
        </div>
        <div className='relative mx-auto grid w-[100vw] justify-items-stretch'>
          <button className='z-10 h-[64px] w-[350px] translate-y-6  justify-self-center rounded-full border-4 border-red-900 bg-myyellow hover:bg-red-900 hover:text-white'>
            <p className='text-xl'>もっとおたよりを見る</p>
          </button>
          <div className='absolute bottom-0 h-[64px] w-[350px] translate-y-9 justify-self-center rounded-full bg-gray-400 opacity-50'></div>
        </div>
      </div>
    </div>
  )
}

export default LatestLetter

export const getStaticProps: GetStaticProps = async () => {
  const allNews = getNewsAll()

  return {
    props: { allNews },
  }
}
