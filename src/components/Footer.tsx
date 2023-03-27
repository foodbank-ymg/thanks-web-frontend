import React from 'react'

const Footer = () => {
  return <div className='h-[250px] bg-orange-900 rounded-3xl text-white text-xl'>
    <div className="float-left ml-10 leading-10">
            <p><span className='bg-amber-300 rounded-full pr-4 pl-4'>フードバンク山口</span></p>
            <h1 className='text-3xl pt-4 font-bold'>特定非営利法人 フードバンク山口</h1>
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
}

export default Footer
