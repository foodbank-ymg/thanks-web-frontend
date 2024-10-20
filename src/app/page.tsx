import Section from '@/components/Section'
import TopHero from '@/components/TopHero'
import TopIntroduction from '@/components/TopIntroduction'
import TopPlace from '@/components/TopPlace'
import { GetApprovedMessages } from '@/data/messages'

const HomePage = async () => {
  const messages = await GetApprovedMessages()

  return (
    <>
      <TopHero messages={messages} />
      <Section>
        <TopIntroduction />
      </Section>
      <Section>
        <TopPlace />
      </Section>
    </>
  )
}

export default HomePage
