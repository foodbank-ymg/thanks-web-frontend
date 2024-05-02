import Calendars from '@/components/Calendars'
import HeroRect from '@/components/HeroRect'
import PostList from '@/components/PostList'
import { GetApprovedPosts } from '@/data/posts'
import { biuldYearMonthsList } from '@/lib/posts'
import { YearMonths } from '@/types/YearMonths'

const LATEST_POSTS_QUANTITY = 24

const LatestPostsPage = async () => {
  // 投稿データ
  let posts_ = await GetApprovedPosts()
  const posts = posts_.slice(0, Math.min(posts_.length, LATEST_POSTS_QUANTITY))

  // カレンダー年月
  const yearMonthsList: YearMonths[] = biuldYearMonthsList(posts_)

  return (
    <>
      <HeroRect bgUrl={posts[0].images[0]}>
        <div className='text-center'>
          <h1 className='text-hb mb-[16px]'>最近のおたより</h1>
          <div className='flex flex-col justify-center md:flex-row'>
            <p>みなさまから届いた</p>
            <p>最近のおたよりをまとめています。</p>
          </div>
        </div>
      </HeroRect>
      <div className='pt-2h text-center'>
        <h1 className='text-hb'>最近のおたより</h1>
      </div>
      <div className='pt-h'>
        <PostList posts={posts} />
      </div>
      <Calendars yearMonthsList={yearMonthsList} />
    </>
  )
}

export default LatestPostsPage
