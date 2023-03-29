import React from 'react'

const Footer = () => {
  return (
    <div className='h-[250px] rounded-3xl bg-orange-900 text-xl text-white'>
      <div className='float-left ml-10 leading-10'>
        <p>
          <span className='rounded-full bg-amber-300 px-4'>フードバンク山口</span>
        </p>
        <h1 className='pt-4 text-3xl font-bold'>特定非営利法人 フードバンク山口</h1>
        <div className='pt-4'>
          <p>山口市黒川1159-13</p>
          <p>TEL: 080-3365-9640 (事務局) FAX: 083-963-4157</p>
        </div>
      </div>
      <div className='float-right mr-20 pt-8 leading-8'>
        <p>最近のお便り</p>
        <p>これまでのお便り</p>
        <p>ありがとうWebsiteについて</p>
        <p>フードバンク山口公式サイト</p>
      </div>
    </div>
  )
}

export default Footer
