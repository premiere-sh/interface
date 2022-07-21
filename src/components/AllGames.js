import Image from 'next/image'
import styled from 'styled-components'
import { Grid, Cell } from 'styled-css-grid'
import GameTile from 'components/GameTile'
import { Subheading, Row, Container } from 'components/common'
import GradientDropdown from 'components/GradientDropdown'
import { useState, useRef, useEffect } from 'react'
import {
  InstantSearch,
  MenuSelect,
  connectHits,
  connectMenu
} from 'react-instantsearch-dom'
import algoliasearch from 'algoliasearch'
import Select from 'react-select'

const DropdownContainer = styled.button`
  display: flex;
  align-items: center;
  flex-direction: row;
  border: none;
  outline: none;
  background: linear-gradient(266.89deg, #982649 -18.13%, #f71735 120.14%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.1em;
  margin-bottom: 80px;
  width: 250px;
`

const DropDownContainer = styled.div`
  position: absolute;
`

const HitContainer = styled.div`
  height: 100px;
  width: 200px;
  background: brown;
`

const Option = styled.option`
  color: black;
`

const MenuContainer = styled.div`
  width: 200px;
  height: 200px;
  background: black;
`

const searchClient = algoliasearch(
  'J5N2XCPQQS',
  'cd04218c2b5aa38fd04e04f1e56b625a'
)

const Menu = ({ items, currentRefinement, refine }) => {
  return (
    <div>
      <p>Current refinement: {currentRefinement}</p>
      <select
        value={currentRefinement || ''}
        onChange={(event) => refine(event.currentTarget.value)}
      >
        {items.map((item) => (
          <option
            key={item.label}
            value={item.isRefined ? currentRefinement : item.value}
          >
            {item.label}
          </option>
        ))}
      </select>
    </div>
  )
}

const CustomMenuSelect = connectMenu(Menu)

const Hits = connectHits(({ hits }) => {
  const items = hits.map((hit, idx) => (
    <Cell style={{ display: 'flex', justifyContent: 'center' }} key={idx}>
      <GameTile game={hit.name} caption={hit.caption} />
    </Cell>
  ))
  return (
    <Grid columns={'repeat(auto-fit, minmax(210px, 1fr))'} gap={'45px'}>
      {items}
    </Grid>
  )
})

export default function AllGames({ games }) {
  return (
    <Container>
      <InstantSearch searchClient={searchClient} indexName="dev_premiere">
        <Row
          style={{
            justifyContent: 'space-between'
          }}
        >
          <Subheading>ALL GAMES</Subheading>
          <DropdownContainer>
            <div style={{ marginLeft: 22 }}>
              <Image
                src={'/dropdown.svg'}
                width={16}
                height={16}
                alt={'dropdown'}
              />
            </div>
            <CustomMenuSelect attribute="platform" />
          </DropdownContainer>
        </Row>
        <Hits />
      </InstantSearch>
    </Container>
  )
}
