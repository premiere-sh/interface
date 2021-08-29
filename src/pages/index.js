import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Column } from 'components/common'
import Header from 'components/Header'
import AllGames from 'components/AllGames'
import SocialsSection from 'components/SocialsSection'
import Footer from 'components/Footer'
import ViewAll from 'components/ViewAll'

export default function Home() {
  function onMouseEvent() {
    if (window.innerWidth < 960) {
      setDropdown(true)
      console.log('setting dropdown')
    } else {
      setDropdown(false)
    }
  }
  const [dropdown, setDropdown] = useState(false)
  return (
    <Column 
      onMouseEnter={onMouseEvent}
      onMouseLeave={onMouseEvent}
    >
      <Head>
        <title>Premiere</title>
        <meta 
          name="description" 
          content="Participate in gaming tournaments and receive crypto!" 
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ marginBottom: 130 }}>
        <Header dropdown={dropdown} />
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

