import Image from 'next/image'
import React from 'react'

const Detail = () => {
  return (
    <div className='mx-auto w-1/2 text-center'>
      <h1 className='break-words lg:whitespace-nowrap'>
        いただいたカレーのルーで炊き出しをしました。
      </h1>
      <p className='mb-16 mt-8 text-myyellow'>2023.2.20</p>
      <p className='mx-auto mb-16 w-full break-words'>
        ああああああああああああああああああああああああああああ
        ああああああああああああああああああああああああああああ
        ああああああああああああああああああああああああああああ
        ああああああああああああああああああああああああああああ
        ああああああああああああああああああああああああああああ
        ああああああああああああああああああああ
      </p>
      <div className='flex justify-center'>
        <Image src='/img/flower_r.svg' width='200' height='0' alt='logo' className='w-1/2' />
        <Image src='/img/flower_r.svg' width='200' height='0' alt='logo' className='w-1/2' />
      </div>
    </div>
  )
}

export default Detail
