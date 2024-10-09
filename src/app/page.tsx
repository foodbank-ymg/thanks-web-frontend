import { GetApprovedPosts } from '@/data/posts'

const HomePage = async () => {
  const posts = await GetApprovedPosts()

  return (
    <>
      {/* ヒーローセクション */}
      {/* 見出し */}
      <div className='flex h-[600px] w-full flex-col items-center justify-center bg-blue-300'>
        <p className='text-hb flex flex-col items-center py-36'>
          「お互いさまのきもち」を応援
          <br />
          みんなの冷蔵庫
          <br />
        </p>
        <h1>防府コミュニティフリッジ</h1>
      </div>

      {/* 冒頭説明1 */}
      <div className='flex h-[600px] w-full items-center justify-center bg-green-200'>
        冒頭説明1
      </div>

      {/* 冒頭説明2 */}
      <div className='flex h-[600px] w-full items-center justify-center bg-orange-200'>
        冒頭説明2
      </div>
    </>
  )
}

export default HomePage
