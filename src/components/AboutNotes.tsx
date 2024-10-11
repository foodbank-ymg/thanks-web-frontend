import FlagHeadline from '@/components/FlagHeadline'

export default function AboutNotes() {
  return (
    <div className='h-[400px] bg-white p-[88px]'>
      <div className='mb-[32px]'>
        <FlagHeadline
          headline='みなさまからのメッセージについて'
          bgColor='bg-primary'
          textColor='text-black'
        />
        <p>あああ</p>
      </div>

      <div className='mb-[32px]'>
        <FlagHeadline headline='著作権について' bgColor='bg-primary' textColor='text-black' />
        <p>いいい</p>
      </div>

      <div className='mb-[32px]'>
        <FlagHeadline headline='免責事項' bgColor='bg-primary' textColor='text-black' />
        <p>ううう</p>
      </div>
    </div>
  )
}
