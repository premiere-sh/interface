import Image from 'next/image'
import styled from 'styled-components'
import { GradientText } from 'components/common'
import { Column } from 'components/common'
import { useState } from 'react'

const Dropdown = styled.div`
  width: 250px;
  background: white;
  position: absolute;
  top: 230px;
  z-index: 13;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  padding-left: 20px;
`

const Text = styled(GradientText)`
  background: linear-gradient(266.89deg, #982649 -18.13%, #f71735 120.14%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.1em;
`

const DropdownContainer = styled(Column)``

const DropdownButton = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  flex-direction: row;
`

const Option = styled.div`
  height: 55px;
  width: 200px;
  background: black;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 55px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-left: 20px;
  &:hover {
    background: linear-gradient(266.89deg, #982649 -18.13%, #f71735 120.14%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

const DropdownOption = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  flex-direction: row;
`

export default function Menu({ items, currentRefinement, refine, option, handleTournamentMenu }) {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [selectedLeaderboard, setSelectedLeaderboard] = useState()

  const handleOptionSelect = (e) => {
    if (option == 'leaderboard') setSelectedLeaderboard(e.currentTarget.name)
    if (option == 'game') {
      if(e == 'all'){
        handleTournamentMenu('all')
      }
      else handleTournamentMenu(e.target.textContent)
    }
    setDropdownOpen(false)
  }

  const switchText = (option) => {
    switch (option) {
      case 'leaderboard':
        return !selectedLeaderboard
          ? 'OTHER LEADERBOARDS'
          : `FILTER BY: ${selectedLeaderboard?.toUpperCase()}`
      case 'platform':
      case 'game':
        return !currentRefinement
          ? `FILTER BY ${option.toUpperCase()}`
          : `FILTER BY: ${currentRefinement?.toUpperCase()}`
    }
  }

  return (
    <DropdownContainer>
      <DropdownButton onClick={() => setDropdownOpen(!dropdownOpen)}>
        <Text>{switchText(option)}</Text>
        <div style={{ marginBottom: -4, marginLeft: 22 }}>
          <Image
            src={'/dropdown.svg'}
            width={16}
            height={16}
            alt={'dropdown'}
          />
        </div>
      </DropdownButton>
      {dropdownOpen && (
        <Dropdown>
          {option != 'leaderboard' && (
            <DropdownOption onClick={()=> handleOptionSelect('all')} value={null}>
              <Option>ALL {option}S</Option>
            </DropdownOption>
          )}
          {items.map((item, idx) => (
            <DropdownOption
              key={idx}
              value={item.isRefined ? currentRefinement : item.value}
              name={item.label}
              onClick={handleOptionSelect}
            >
              {option == 'PLATFORM' && (
                <Image
                  src={`/${item.label == 'pc' ? 'laptop' : item.label}.svg`}
                  width={16}
                  height={16}
                  alt={{ option }}
                />
              )}
              <Option>{item.label}</Option>
            </DropdownOption>
          ))}
        </Dropdown>
      )}
    </DropdownContainer>
  )
}
