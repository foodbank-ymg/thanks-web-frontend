import Headline from '@/components/Headline'
import ProviderFlow from '@/components/ProviderFlow'
import ProviderMethod from '@/components/ProviderMethod'
import Section from '@/components/Section'

const ProviderPage = () => {
  return (
    <>
      <Headline headline='食料品や日用品を提供する' />
      <Section>
        <ProviderFlow />
      </Section>
      <Section>
        <ProviderMethod />
      </Section>
    </>
  )
}

export default ProviderPage
