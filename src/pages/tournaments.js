import Header from 'components/Header'
import Footer from 'components/Footer'
import { Row, Column } from 'components/common'
import SocialsSection from 'components/SocialsSection'
import { getTournaments } from 'calls'
import styled from 'styled-components'
import AllTournaments from 'components/AllTournaments'

export default function Tournaments({ tournaments }) {
  // TO ADD TOURNAMNETS TO ALGOLIA:
  // const index = searchClient.initIndex('tournaments')
  // index
  //   .saveObjects(tournaments, {
  //     autoGenerateObjectIDIfNotExist: true
  //   })
  //   .then(objectIDs)

  return (
    <Column>
      <Header />
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

export async function getStaticProps(context) {
  const tournaments = await getTournaments()
  return {
    props: { tournaments }
  }
}
