import Link from 'next/link'
import React from 'react'

type YearMonths = {
  year: number
  months: number[]
}

const Calendars = () => {
  // TODO: DBから全投稿フェッチして、年月の配列を作る
  const yearMonthsList: YearMonths[] = [
    {
      year: 2025,
      months: [1, 2, 3, 4, 5, 6, 7],
    },
    {
      year: 2024,
      months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    {
      year: 2023,
      months: [8, 9, 10, 11, 12],
    },
  ]

  return (
    <>
      {yearMonthsList.map((yearMonths, idx) => (
        <div
          key={idx}
          className='my-8 flex flex-col justify-center whitespace-nowrap px-4 font-body text-2xl text-white lg:flex-row'
        >
          <p className='flex justify-center bg-mybrown py-4 px-10 lg:rounded-l-full'>
            {yearMonths.year}年
          </p>
          <div className='grid grid-cols-6 rounded-b-3xl bg-myyellow px-[5%] text-lg lg:w-[80%] lg:grid-cols-12 lg:rounded-r-full lg:px-[5%] lg:text-2xl'>
            {yearMonths.months.map((month) => (
              <Link
                href={`/monthly-posts/${yearMonths.year}-${month}`}
                key={`${yearMonths.year}-${month}`}
                className=''
              >
                <p className='py-4 text-center'>{month}月</p>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}

export default Calendars
