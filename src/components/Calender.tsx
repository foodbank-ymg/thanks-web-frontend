import Image from 'next/image'
import React from 'react'

const Calender = () => {
  return (
    <div className='flex justify-center whitespace-nowrap font-body text-2xl text-white sm:flex-col lg:flex-row'>
      <h1 className='flex h-auto justify-center bg-mybrown py-4 px-10 lg:rounded-l-full'>2023年</h1>
      <div className='grid h-auto gap-10 bg-myyellow py-4 text-2xl sm:grid-cols-6 sm:rounded-b-3xl lg:grid-cols-12 lg:rounded-r-full'>
        <button className='col-span-1 pl-0 lg:pl-4'>1月</button>
        <button className='col-span-1'>2月</button>
        <button className='col-span-1'>3月</button>
        <button className='col-span-1'>4月</button>
        <button className='col-span-1'>5月</button>
        <button className='col-span-1'>6月</button>
        <button className='col-span-1'>7月</button>
        <button className='col-span-1'>8月</button>
        <button className='col-span-1'>9月</button>
        <button className='col-span-1'>10月</button>
        <button className='col-span-1'>11月</button>
        <button className='col-span-1 pr-0 lg:pr-4'>12月</button>
      </div>
    </div>
  )
}

export default Calender
