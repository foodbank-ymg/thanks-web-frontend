import FlagHeadline from '@/components/FlagHeadline'

export default function RecipientGrocery() {
  return (
    <div className='h-[500px] bg-green-100 p-[88px]'>
      <FlagHeadline
        headline='受け取れる食料品や日用品は毎日かわります！'
        bgColor='bg-grocery'
        textColor='text-white'
      />
    </div>
  )
}
