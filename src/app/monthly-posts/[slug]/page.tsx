import moment from 'moment'

import Calendars from '@/components/Calendars'
import HeroRect from '@/components/HeroRect'
import Month from '@/components/Month'
import PostList from '@/components/PostList'
import { GetApprovedPosts } from '@/data/posts'
import { biuldYearMonthsList } from '@/lib/posts'
import { YearMonths } from '@/types/YearMonths'

export const generateStaticParams = async () => {
  // 年月指定のないパス（メニューやフッターのリンク）も候補として入れておく
  const yearMonths: string[] = ['latest']
  let posts = await GetApprovedPosts()
  posts.forEach((post) => {
    const path = dateToPath(post.createdAt)
    if (!yearMonths.includes(path)) {
      yearMonths.push(path)
    }
  })

  return yearMonths.map((month) => ({
    slug: month,
  }))
}

const MonthlyPostsPage = async ({ params }: { params: { slug: string } }) => {
  let monthlyPath = params.slug as string

  // 投稿データ
  let posts_ = await GetApprovedPosts()

  // 年月指定のないパスは、当月ではない最初の投稿を対象とする（だいたい先月になるはず）
  if (monthlyPath === 'latest') {
    const nowAt = moment(new Date()).format('YYYY.MM.DD')
    const prev = posts_.find((post) => {
      return dateToPath(post.createdAt) !== dateToPath(nowAt)
    })
    if (prev) {
      monthlyPath = dateToPath(prev.createdAt)
    }
  }

  // 月別の投稿
  const posts = posts_.filter((post) => {
    return dateToPath(post.createdAt) === monthlyPath
  })
  // 年月指定がない

  // カレンダー年月
  const yearMonthsList: YearMonths[] = biuldYearMonthsList(posts_)
  let prevMonthlyPath = ''
  let nextMonthlyPath = ''
  yearMonthsList.forEach((yearMonth, yearIndex) => {
    yearMonth.months.forEach((month, monthIndex) => {
      const path = numberToPath(yearMonth.year, month)
      if (path === monthlyPath) {
        // 前月
        if (monthIndex === 0) {
          // その年の初月かつ最も古い年でないなら、次の1つ古い年の末月になる（当年が最新なら無し）
          if (yearIndex !== yearMonthsList.length - 1) {
            const oldYearMonth = yearMonthsList[yearIndex + 1]
            const prev = numberToPath(
              oldYearMonth.year,
              oldYearMonth.months[oldYearMonth.months.length - 1],
            )
            prevMonthlyPath = prev
          }
        } else {
          prevMonthlyPath = numberToPath(yearMonth.year, yearMonth.months[monthIndex - 1])
        }

        // 次月
        if (monthIndex === yearMonth.months.length - 1) {
          // その年の最終月かつ最も新しい年でないなら、前の1つ新しい年の初月になる（当年が最新なら無し）
          if (yearIndex !== 0) {
            const newYearMonth = yearMonthsList[yearIndex - 1]
            const next = numberToPath(newYearMonth.year, newYearMonth.months[0])
            nextMonthlyPath = next
          }
        } else {
          nextMonthlyPath = numberToPath(yearMonth.year, yearMonth.months[monthIndex + 1])
        }
      }
    })
  })

  return (
    <div>
      <HeroRect bgUrl={posts[0].images[0]}>
        <div className='text-center'>
          <h1 className='text-hb mb-[16px]'>これまでのおたより</h1>
          <div className='flex flex-col justify-center md:flex-row'>
            <p>みなさまから届いた</p>
            <p>大切なおたよりを、</p>
            <p>月ごとにまとめています。</p>
          </div>
          <div className='flex flex-col justify-center md:flex-row'>
            <p>ぜひ、あなたあてのおたよりを</p>
            <p>見つけてみてください。</p>
          </div>
        </div>
      </HeroRect>
      <div className='pt-2h'>
        <Month
          monthlyPath={monthlyPath}
          prevYearMonth={prevMonthlyPath}
          nextYearMonth={nextMonthlyPath}
        />
      </div>
      <div className='pt-h'>
        <PostList posts={posts} />
      </div>
      <Calendars yearMonthsList={yearMonthsList} />
    </div>
  )
}

export default MonthlyPostsPage

const dateToPath = (date: string): string => {
  const ymd = date.split('.').slice(0, 2)
  return `${ymd[0]}-${Number(ymd[1])}`
}

const numberToPath = (year: number, month: number): string => {
  return `${year}-${month}`
}
