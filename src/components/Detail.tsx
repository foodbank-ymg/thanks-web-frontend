import Image from 'next/image'
import React from 'react'

const Detail = () => {
  return (
    <div className='mx-auto w-1/2 text-center'>
      <h1 className='break-words lg:whitespace-nowrap'>
        いただいたカレーのルーで炊き出しをしました。
      </h1>
      <p className='mt-8 mb-16 text-myyellow'>2023.2.20</p>
      <p className='mx-auto mb-16 w-full break-words'>
        ああああああああああああああああああああああああああああ
        ああああああああああああああああああああああああああああ
        ああああああああああああああああああああああああああああ
        ああああああああああああああああああああああああああああ
        ああああああああああああああああああああああああああああ
        ああああああああああああああああああああ
      </p>
      <div className='flex justify-center'>
        <Image src='illust_heartflower_r.svg' width='200' height='0' alt='logo' className='w-1/2' />
        <Image src='illust_heartflower_r.svg' width='200' height='0' alt='logo' className='w-1/2' />
      </div>
    </div>
  )
}

export default Detail
