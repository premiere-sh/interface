import Header from 'components/Header'
import Footer from 'components/Footer'
import PageNotFound from 'components/PageNotFound';
import { Column } from 'components/common'

export default function Custom404() {
  return (
    <Column>
      <Header />
        <PageNotFound />
      <Footer />
    </Column>
  )
}
