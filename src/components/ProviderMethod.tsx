import FlagHeadline from '@/components/FlagHeadline'

export default function ProviderMethod() {
  return (
    <div className='h-[800px] bg-red-100 p-[88px]'>
      <div>
        <FlagHeadline
          headline='インターネットから応援！'
          bgColor='bg-provider'
          textColor='text-white'
        />
        あああ
      </div>
      <div>
        <FlagHeadline headline='寄付金での応援！' bgColor='bg-provider' textColor='text-white' />
        いいい
      </div>
    </div>
  )
}
