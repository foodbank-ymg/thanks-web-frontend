export default function Headline({ headline }: { headline: string }) {
  return (
    <div className='mx-auto flex h-[160px] max-w-screen-lg items-center bg-primary'>
      <h1 className='text-4xl text-black'>{headline}</h1>
    </div>
  )
}
