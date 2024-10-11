import FlagHeadline from '@/components/FlagHeadline'

export default function AboutOrganizations() {
  return (
    <div className='h-[700px] bg-gray-200 p-[88px]'>
      <FlagHeadline
        headline='このサイトに関わっている団体'
        bgColor='bg-primary'
        textColor='text-black'
      />
      <ul>
        <li>徳山高専</li>
        <li>特定非営利活動法人市民活動さぽーとねっと</li>
        <li>デジテック for YAMAGUCHI</li>
      </ul>
    </div>
  )
}
