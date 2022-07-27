import Header from 'components/Header'
import Footer from 'components/Footer'
import { Column } from 'components/common'

export default function Home() {
  return (
    <Column>
      <Header games={games} />
      <Footer />
    </Column>
  )
}
