import moment from 'moment'

import { biuldYearMonthsList } from './posts'

import { Post } from '@/types/Post'
import { YearMonths } from '@/types/YearMonths'

const filledPost = (createdAt: string): Post => {
  return {
    createdAt,
    id: '',
    recipientGroupName: '',
    subject: '',
    body: '',
    images: [],
  }
}

describe('biuldYearMonthsList', () => {
  it('should return a list of year and months', () => {
    const posts: Post[] = [
      filledPost('2023.09.15'),
      filledPost('2023.08.20'),
      filledPost('2022.07.10'),
      filledPost('2021.06.05'),
    ]

    const expected: YearMonths[] = [
      { year: 2023, months: [8, 9] },
      { year: 2022, months: [7] },
      { year: 2021, months: [6] },
    ]

    const result = biuldYearMonthsList(posts)
    expect(result).toEqual(expected)
  })

  it('should exclude the current month', () => {
    const currentMonth = moment(new Date()).format('YYYY.MM')
    const posts: Post[] = [filledPost(`${currentMonth}.01`), filledPost('2023.08.20')]

    const expected: YearMonths[] = [{ year: 2023, months: [8] }]

    const result = biuldYearMonthsList(posts)
    expect(result).toEqual(expected)
  })
})
