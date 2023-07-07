import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col items-center whitespace-nowrap rounded-[5vw] bg-mybrown px-[44px] py-[32px] text-xl text-white lg:flex-row'>
      <div className='text-center leading-10 lg:text-left'>
        <Image src='/img/logo_normal.svg' width='500' height='0' alt='logo' />
        <h1 className='pt-4 text-3xl font-bold'>特定非営利法人 フードバンク山口</h1>
        <div className='pt-4'>
          <p>山口市黒川1159-13</p>
          <div className='flex flex-col md:flex-row'>
            <p>TEL: 080-3365-9640(事務局)&emsp;</p>
            <p>FAX: 083-963-4157</p>
          </div>
        </div>
      </div>
      <div className='ml-0 flex flex-col pt-4 leading-8 lg:ml-auto'>
        <a href='#' className=''>
          ▶︎&ensp;最近のお便り
        </a>
        <a href='#' className=''>
          ▶︎&ensp;これまでのお便り
        </a>
        <div className='ml-8 leading-[80px]'>
          <a href='#' className=''>
            ▶︎2023年&emsp;
          </a>
          <a href='#' className=''>
            ▶︎2023年&emsp;
          </a>
          <a href='#' className=''>
            ▶︎2023年&emsp;
          </a>
        </div>
        <a href='#' className=''>
          ▶&ensp;ありがとうWebsiteについて
        </a>
        <a href='#' className=''>
          ▶︎&ensp;フードバンク山口公式サイト
        </a>
      </div>
    </div>
  )
}

export default Footer
