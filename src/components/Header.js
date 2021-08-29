import styled from 'styled-components'
import { Row } from 'components/common'
import Dropdown, { DropdownText } from 'components/Dropdown'
import { SignupButton } from 'components/Buttons'
import LogoHeader from 'components/LogoHeader'
import Image from 'next/image'

const Header = styled(Row)`
  justify-content: space-around;
  height: 110px;
  padding-left: 30px;
  padding-right: 30px;
`

const LogoBit = styled.div`
  margin-right: 50px;
`

const LinksBit = styled(Row)`
  width: 100%;
  max-width: 800px;
  justify-content: space-between;
`

const SignupBit = styled(Row)`
  width: 100%;
  max-width: 200px;
  justify-content: space-between;
  margin-left: 50px;
`

// TODO make the header zip when device small
export default function _Header() {
  return (
    <Header>
      <LogoBit>
        <LogoHeader />
      </LogoBit>
      <LinksBit>
        <Dropdown text={'GAMES'} />
        <Dropdown text={'TOURNAMENTS'} />
        <Dropdown text={'LEADERBOARDS'} />
        <DropdownText>SUPPORT</DropdownText>
      </LinksBit>
      <SignupBit>
        <Image src={'/search.svg'} width={32} height={32} />
        <SignupButton />
      </SignupBit>
    </Header>
  )
}

