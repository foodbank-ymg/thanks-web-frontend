export default function Section({ children, bg }: { children: React.ReactNode; bg?: string }) {
  return (
    <div className='w-full border-t-[3px] border-black bg-primary pb-[88px]'>
      <div className='mx-auto max-w-[1200px] border-x-[3px] border-b-[3px] border-black'>
        {children}
      </div>
    </div>
  )
}
