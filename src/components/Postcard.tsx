import { imageConfigDefault } from 'next/dist/shared/lib/image-config'
import Image from 'next/image'
import React from 'react'
const Postcard = () => {
  return (
    <div className='h-[450px] w-full bg-myyellowpale'>
      <div className='relative aspect-[2/1] sm:aspect-[9/13] sm:w-[300px]'>
        <div className='absolute bottom-0 left-0 h-full w-[95%] origin-bottom rotate-6 overflow-hidden rounded-3xl bg-gray-400 opacity-20 sm:w-full sm:origin-bottom-left'></div>
        <div className='relative z-10 h-full w-[95%] rounded-3xl bg-white sm:w-full'>
          <a href='' className='absolute h-full w-full rounded-3xl bg-white'>
            <div className='flex h-full w-full flex-row p-3 sm:flex-col'>
              <div className='relative flex aspect-[1/1] h-auto w-[45%] rounded-xl border bg-center sm:w-auto'>
                <Image
                  fill
                  src='/foodbank_mark.svg'
                  alt='カレールーの炊き出し'
                  className='block object-contain'
                />
              </div>
              <div className='relative flex grow flex-col bg-smile bg-contain bg-right-bottom bg-no-repeat p-3 text-center max-sm:bg-60% sm:bg-left-bottom'>
                <h3 className='absolute text-mybrown max-sm:top-1/4 sm:flex'>
                  あたたかいお味噌汁で寒い冬を乗り越えられそうです
                </h3>
                <h6 className='absolute bottom-[20%] left-1/2 -translate-x-1/2 text-myyellow sm:bottom-0'>
                  2023.2.23
                </h6>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
export default Postcard
