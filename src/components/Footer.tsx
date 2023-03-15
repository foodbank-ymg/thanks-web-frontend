import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-yellow-50 p-[16px]'>
      <div className='flex flex-col rounded-2xl bg-[#701010] p-[16px] text-white md:flex-row'>
        <div className=''>
          <p>
            <span className='text-orange-200'>フードバンク山口</span>
          </p>
          <h1>特定非営利法人 フードバンク山口</h1>
          <p>山口市黒川1159-13</p>
          <p>TEL: 080-3365-9640 (事務局) FAX: 083-963-4157</p>
        </div>
        <div className='m-0 md:ml-auto'>
          <p>
            <span>▼最近のお便り</span>
          </p>
          <p>これまでのお便り</p>
          <p>ありがとうWebsiteについて</p>
          <p>フードバンク山口公式サイト</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
