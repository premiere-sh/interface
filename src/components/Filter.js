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

export default function Menu({ items, currentRefinement, refine, option }) {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const handleOptionSelect = (e) => {
    setDropdownOpen(false)
    refine(e.currentTarget.value)
  }
  return (
    <DropdownContainer>
      <DropdownButton onClick={() => setDropdownOpen(!dropdownOpen)}>
        <Text>
          {currentRefinement
            ? `FILTER BY: ${currentRefinement.toUpperCase()}`
            : option == 'leaderboard'
            ? 'OTHER LEADERBOARDS'
            : `FILTER BY ${option}`}
        </Text>
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
          <DropdownOption onClick={handleOptionSelect} value={null}>
            <Option>ALL {option}S</Option>
          </DropdownOption>
          {items.map((item, idx) => (
            <DropdownOption
              key={idx}
              value={item.isRefined ? currentRefinement : item.value}
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
