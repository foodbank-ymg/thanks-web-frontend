import Section from '@/components/Section'
import TopHero from '@/components/TopHero'
import TopIntroduction from '@/components/TopIntroduction'
import TopPlace from '@/components/TopPlace'

const HomePage = async () => {
  return (
    <>
      <TopHero />
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
