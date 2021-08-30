import { useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Row } from 'components/common'
import Dropdown, { DropdownText } from 'components/Dropdown'
import { SignupButton } from 'components/Buttons'
import LogoHeader from 'components/LogoHeader'

const Header = styled(Row)`
  justify-content: space-between;
  height: 110px;
  padding-left: 30px;
  padding-right: 30px;
  width: min(80%, 1400px);
  margin: auto;
  @media screen and (max-width: 600px) {
    width: 480px;
    padding: 0;
  }
`

const LogoBit = styled(Row)`
  min-width: 205px;
  margin-right: 50px;
  @media screen and (max-width: 600px) {
    margin-right: 0px;
    margin-left: 25px;
  }
`

const LinksBit = styled(Row)`
  width: 100%;
  max-width: 640px;
  justify-content: space-between;
  @media screen and (max-width: 1400px) {
    display: none;
  }
`

const LinksDropdown = styled.div`
  margin-right: 20px;
  @media screen and (min-width: 1400px) {
    display: none;
  }
`

const SignupBit = styled(Row)`
  width: 100%;
  max-width: 200px;
  justify-content: space-between;
  margin-left: 50px;
  @media screen and (max-width: 650px) {
    margin-left: 0;
    justify-content: center;
    max-width: 140px;
  }
`

const SearchButtonContainer = styled.div`
  @media screen and (max-width: 650px) {
    display: none;
  }
`

// TODO make the header zip when device small
export default function _Header() {
  const [navigatorOpen, setNavigatorOpen] = useState(false)
  return (
    <Header>
      <LogoBit>
        <LinksDropdown 
          onClick={() => setNavigatorOpen(!navigatorOpen)}
        >
          <Image 
            src={
              navigatorOpen 
                ? '/navigator_open.svg' 
                : '/navigator.svg'
            } 
            width={24}
            height={24}
            alt={'navigator'}
          />
        </LinksDropdown>
        <LogoHeader />
      </LogoBit>
      <LinksBit>
        <Dropdown text={'GAMES'} />
        <Dropdown text={'TOURNAMENTS'} />
        <Dropdown text={'LEADERBOARDS'} />
        <DropdownText>SUPPORT</DropdownText>
      </LinksBit>
      <SignupBit>
        <SearchButtonContainer>
          <Image 
            src={'/search.svg'}
            width={32}
            height={32} 
            alt={'search'}
          />
        </SearchButtonContainer>
        <SignupButton />
      </SignupBit>
    </Header>
  )
}

