import FlagHeadline from '@/components/FlagHeadline'

export default function AboutOwner() {
  return (
    <div className='h-[300px] bg-white p-[88px]'>
      <FlagHeadline
        headline='防府コミュニティフリッジを運営している団体'
        bgColor='bg-primary'
        textColor='text-black'
      />
      <div className='flex'>
        <div className='mr-10 w-[650px]'>
          <p className='my-5 text-xl'>特定非営利活動法人市民活動さぽーとねっと</p>
          <p className='text-sm'>
            新型コロナウイルス感染症による影響などで、困難を抱えている子育て家庭等を支えたいと、国内では岡山県から始まった「コミュニティフリッジ」は今、全国に広がりつつあります。
          </p>
          <p className='text-sm'>
            防府市でも、山口県初の「みんなの公共冷蔵庫」として、令和3年11月に活動をスタートさせました。
          </p>
        </div>
        <img src='#' alt='image' />
      </div>
    </div>
  )
}
