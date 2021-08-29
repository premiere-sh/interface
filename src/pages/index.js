import Head from 'next/head'
import Image from 'next/image'
import { Column } from 'components/common'
import Header from 'components/Header'
import AllGames from 'components/AllGames'
import SocialsSection from 'components/SocialsSection'
import Footer from 'components/Footer'
import ViewAll from 'components/ViewAll'

export default function Home() {
  return (
    <Column>
      <Head>
        <title>Premiere</title>
        <meta name="description" content="content" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ marginBottom: 130 }}>
        <Header  />
      </div>
      <div style={{ marginBottom: 150 }}>
        <AllGames />
      </div>
      <div style={{ marginBottom: 150 }}>
        <SocialsSection />
      </div>
      <Footer />
    </Column>
  )
}

