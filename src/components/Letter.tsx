import Image from 'next/image'
import React from 'react'

const Letter = () => {
  return (
    <div className='flex flex-col items-center whitespace-nowrap bg-myyellowpale px-[44px] py-[32px] font-body text-xl text-black'>
      <h1 className='text-mlabel'>フードロス・もったいないが、ありがとうになりました。</h1>
      <Image src='illust_heartflower_r.svg' width='200' height='0' alt='logo' />
      <h1 className='text-h2'>これまでのおたより</h1>
      <p className='mt-8'>みなさまから届いた大切なお便りを、月ごとにまとめています。</p>
      <p>ぜひ、あなたあてのおたよりを見つけてみてください。</p>
      <button className='mt-8 rounded-3xl border-4 border-myyellow bg-white px-8 py-2 hover:bg-myyellow'>
        月ごとのお便りを見る
      </button>
    </div>
  )
}

export default Letter
