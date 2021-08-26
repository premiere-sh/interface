import LogoHeader from 'components/LogoHeader'
import Signup from 'components/Signup'
import Dropdown from 'components/Dropdown'
import Head from 'next/head'
import Image from 'next/image'
import { Column } from 'components/common'

export default function Home() {
  return (
    <Column>
      <Head>
        <title>Title</title>
        <meta name="description" content="content" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LogoHeader />

      <Signup />

      <Dropdown text={'GAMES'} />

      <footer></footer>
    </Column>
  )
}


