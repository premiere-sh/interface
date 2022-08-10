import React, {useState, useEffect} from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
import { Row, Column } from 'components/common'
import SocialsSection from 'components/SocialsSection'
import { getTournaments, getGames } from 'calls'
import AllTournaments from 'components/AllTournaments'

export default function Tournaments() {

  const [tournaments,setTournaments]=useState([])

  useEffect(async()=> {
    const tournamentsCall = await getTournaments()
    setTournaments(tournamentsCall)
    console.log(tournaments)
  },[])

  const games = []

  return (
    <Column>
      <Header games={games} tournaments={tournaments} />
      {tournaments?.length && (
        <div style={{ marginBottom: 150 }}>
          <AllTournaments tournaments={tournaments} />
        </div>
      )}
      <div style={{ marginBottom: 150 }}>
        <SocialsSection />
      </div>
      <Footer />
    </Column>
  )
}
