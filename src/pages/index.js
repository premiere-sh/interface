import Header from 'components/Header'
import Footer from 'components/Footer'
import { Column, Container } from 'components/common'
import HomeHeading from 'components/HomeHeading'

export default function Home() {
  return (
    <Column> 
      <Header home={true} />
      <Container>
        <HomeHeading />
      </Container>
      <Footer />
    </Column>
  )
}

