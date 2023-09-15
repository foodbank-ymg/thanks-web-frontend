import { Post } from '@/types/Post'
import { YearMonths } from '@/types/YearMonths'

// 投稿一覧からカレンダー向けの年月リストを返す
export const biuldYearMonthsList = (posts: Post[]): YearMonths[] => {
  const yearMonthsList: YearMonths[] = []

  posts.forEach((post) => {
    // e.g. 2023.9.1, 2023.10.31
    const numbers = post.createdAt.split('.')
    // 投稿の年
    const year = Number(numbers[0])
    let yearMonths = yearMonthsList.find((current) => current.year === year)
    if (!yearMonths) {
      yearMonths = {
        year,
        months: [],
      }
      // 新しい年は後尾に追加（降順になる）
      yearMonthsList.push(yearMonths)
    }
    // 投稿の月
    const month = Number(numbers[1])
    if (!yearMonths.months.includes(month)) {
      // 新しい月は先頭に追加（昇順になる）
      yearMonths.months.unshift(month)
    }
  })

  return yearMonthsList
}
