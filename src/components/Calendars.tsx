import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { YearMonths } from '@/types/YearMonths'

type Props = {
  yearMonthsList: YearMonths[]
}

const Calendars = ({ yearMonthsList }: Props) => {
  return (
    <>
      {/* 花のアイコンたち */}
      <div className='relative h-[15vw] overflow-hidden'>
        <div className='absolute bottom-[-1vw] right-[25vw] z-10 w-[5vw] max-w-[80px] rotate-[-5deg]'>
          <Image src='/img/flower_l.svg' width={289} height={372} alt='' className=' ' />
        </div>
        <div className='absolute bottom-[-2vw] right-[15vw] z-10 w-[8vw] max-w-[110px] rotate-[5deg]'>
          <Image src='/img/flower_r.svg' width={289} height={372} alt='' className=' ' />
        </div>
      </div>

      {/* 年毎のカレンダー */}
      <div className='mb-[48px] flex flex-col gap-[16px] text-[20px] md:gap-[32px] md:text-[24px]'>
        {yearMonthsList.map((yearMonths, idx) => (
          <div
            key={idx}
            className='flex flex-col justify-center whitespace-nowrap px-4 text-white lg:flex-row'
          >
            <p className='flex justify-center bg-mybrown px-10 py-4 lg:rounded-l-full'>
              {yearMonths.year}年
            </p>
            <div className='grid grid-cols-6 rounded-b-3xl bg-myyellow px-[5%] lg:w-4/5 lg:grid-cols-12 lg:rounded-r-full lg:px-[5%]'>
              {yearMonths.months.map((month) => (
                <Link
                  href={`/monthly-posts/${yearMonths.year}-${month}`}
                  key={`${yearMonths.year}-${month}`}
                  className=''
                >
                  <p className='cursor-pointer py-4 text-center'>{month}月</p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Calendars
