import Header from 'components/Header'
import Footer from 'components/Footer'
import Login from 'components/Login'
import { Column } from 'components/common'

export default function LoginPage() {
  return (
    <Column> 
      <Header />
      <Login />
      <div style={{ height: 50 }} />
      <Footer />
    </Column>
  )
}

