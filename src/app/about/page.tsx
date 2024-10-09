const AboutPage = () => {
  return (
    <>
      {/* 見出し */}
      <div>
        <h1 className='text-hb flex flex-col items-center py-36'>このサイトについて</h1>
      </div>

      {/* 内容1 */}
      <div className='flex h-[600px] w-full items-center justify-center bg-purple-200'>内容1</div>

      {/* 内容2 */}
      <div className='flex h-[600px] w-full items-center justify-center bg-cyan-200'>内容2</div>
    </>
  )
}

export default AboutPage
