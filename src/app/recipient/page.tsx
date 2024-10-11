import Headline from '@/components/Headline'
import RecipientFlow from '@/components/RecipientFlow'
import RecipientGrocery from '@/components/RecipientGrocery'
import Section from '@/components/Section'

const RecipientPage = () => {
  return (
    <>
      <Headline headline='食料品や日用品を受け取る' />
      <Section>
        <RecipientFlow />
      </Section>
      <Section>
        <RecipientGrocery />
      </Section>
    </>
  )
}

export default RecipientPage
