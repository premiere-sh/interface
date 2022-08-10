import { useEffect, useState } from 'react'
import { Subheading, Row, Column, Container } from 'components/common'
import Tournament from 'components/Tournament'
import SmallTournament from 'components/SmallTournament'
import { Grid, Cell } from 'styled-css-grid'
import { getTournaments } from 'calls'
import styled from 'styled-components'
import Menu from 'components/Filter'

const SubheadingRow = styled(Row)`
  margin-bottom: 80px;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`
const Hits = (({ hits }) => {
  const [width, setWidth] = useState(null)

  useEffect(function () {
    setWidth(window.innerWidth)
    console.log(window.innerWidth)
  }, [])

  const items = hits.map((hit, idx) => (
    <Cell style={{ display: 'flex', justifyContent: 'center' }} key={idx}>
      <SmallTournament tournament={hit} />
    </Cell>
  ))

  return (
    <Column>
      {width > 800 && <Tournament tournament={hits[0]} />}
      <Grid columns={'repeat(auto-fit, minmax(550px, 1fr))'} gap={'50px'}>
        {items}
      </Grid>
    </Column>
  )
})

export default function AllTournaments({ tournaments }) {

  const [filterOption, setFilterOption]=useState(null)
  const [filteredTournaments, setFilteredTournaments] =useState(tournaments)

  const handleTournamentMenu = (option)=>{
    setFilterOption(option)
  }

  const menuItems = tournaments.map((tournament, index)=>{
    return{
      label: tournament.game,
      value: tournament.game
    }
  })

  useEffect(()=>{
    if(filterOption !== null){
      setFilteredTournaments(tournaments.filter((tournament)=> {return tournament.game == filterOption}))
    } 
    if(filterOption == 'all'){
      setFilteredTournaments(tournaments)
    }   
  },[filterOption])

  return (
      <>
        <Container>
          <SubheadingRow style={{ justifyContent: 'space-between' }}>
            <Subheading>TOURNAMENTS</Subheading>
            <Menu attribute={'game'} option={'game'} items={menuItems} handleTournamentMenu={handleTournamentMenu}/>
</SubheadingRow>
        </Container>
        {filteredTournaments.length>0 && (
          <Container style={{ marginBottom: 220 }}>
            <Hits hits={filteredTournaments}/>
          </Container>
        )}
      </>
  )
}
