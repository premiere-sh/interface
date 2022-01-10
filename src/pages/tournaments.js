import { useEffect, useState } from "react"
import Header from "components/Header"
import Footer from "components/Footer"
import { Subheading, Row, Column, Container } from "components/common"
import Tournament from "components/Tournament"
import SmallTournament from "components/SmallTournament"
import SocialsSection from "components/SocialsSection"
import GradientDropdown from "components/GradientDropdown"
import { Grid, Cell } from "styled-css-grid"
import { getTournaments } from "calls"
import styled from "styled-components"

const SubheadingRow = styled(Row)`
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`

export default function Tournaments({ tournaments }) {
  const [width, setWidth] = useState(null)
  useEffect(function () {
    setWidth(window.innerWidth)
    console.log(window.innerWidth)
  }, [])
  return (
    <Column>
      <Header />
      <Container>
        <SubheadingRow style={{ justifyContent: "space-between" }}>
          <Subheading>TOURNAMENTS</Subheading>
          <GradientDropdown text={"FILTER BY GAME"} />
        </SubheadingRow>
      </Container>
      {tournaments && (
        <>
          <Container style={{ marginBottom: 220 }}>
            {width > 800 && <Tournament tournament={tournaments[0]} />}
            <Grid
              columns={"repeat(auto-fit, minmax(550px, 1fr))"}
              gap={"50px"}
            >
              {tournaments.map((tournament, idx) => (
                <Cell
                  style={{ display: "flex", justifyContent: "center" }}
                  key={idx}
                >
                  <SmallTournament tournament={tournament} />
                </Cell>
              ))}
            </Grid>
          </Container>
        </>
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
