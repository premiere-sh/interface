import { useState, useEffect, useRef, useContext } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import Image from 'next/image'
import { Row, Column } from 'components/common'
import { DropdownText } from 'components/Dropdown'
import { Button } from 'components/Buttons'
import LogoHeader from 'components/LogoHeader'
import AuthenticationContext from 'contexts/authentication'
import Router from 'next/router'
import SearchBar from 'components/SearchBar'

const HeaderContainer = styled.div`
  margin-bottom: ${(props) => (props.home ? '80px' : '60px')};
`

const Header = styled(Row)`
  justify-content: space-between;
  height: 110px;
  padding-left: 30px;
  padding-right: 30px;
  width: min(80%, 1400px);
  margin: auto;
`

const LogoBit = styled(Row)``

const LinksBit = styled(Row)`
  width: 100%;
  max-width: 800px;
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

const LoginButton = styled(Button)`
  width: 129px;
  height: 36px;
`

const SignupBit = styled(Row)`
  width: 100%;
  max-width: 250px;
  justify-content: space-between;
  @media screen and (max-width: 650px) {
    margin-left: 0;
    justify-content: center;
    max-width: 140px;
  }
`

const NavigatorContainer = styled.div`
  width: 400px;
  height: 400px;
  position: absolute;
  z-index: 13;
  background: #ffffff;
  top: 110px;
  left: 30px;
  @media screen and (min-width: 1400px) {
    display: none;
  }
`

const LinksContainer = styled.div`
  width: 70%;
  margin: auto;
  height: 300px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: flex-start;
`

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  @media screen and (max-width: 650px) {
    transform: translateX(-30px);
  }
`

const AvatarPlaceholder = styled.div`
  height: 40px;
  width: 40px;
`

const LogoutButton = styled(LoginButton)``

const OtherDropdownContainer = styled(Column)`
  width: 200px;
  height: 110px;
  position: absolute;
  z-index: 13;
  background: #f9f9f9;
  top: 70px;
  margin-left: -150px;
  align-items: flex-start;
  border-radius: 5px;
  box-shadow: 0px 4px 8px 0px #0000000d;
`

function Navigator({ isAuthenticated, currentUser }) {
  return (
    <NavigatorContainer>
      <LinksContainer>
        <Link href={'/games'}>
          <a>
            <DropdownText>GAMES</DropdownText>
          </a>
        </Link>
        <Link href={'/tournaments'}>
          <a>
            <DropdownText>TOURNAMENTS</DropdownText>
          </a>
        </Link>
        <Link href={'/leaderboards'}>
          <a>
            <DropdownText>LEADERBOARDS</DropdownText>
          </a>
        </Link>
        <Link href={'/support'}>
          <a>
            <DropdownText>SUPPORT</DropdownText>
          </a>
        </Link>
        <Link href={'/events'}>
          <a>
            <DropdownText>EVENTS</DropdownText>
          </a>
        </Link>
        {!isAuthenticated ? (
          <Link href={'/login'}>
            <a>
              <LoginButton>login</LoginButton>
            </a>
          </Link>
        ) : (
          <div style={{ marginLeft: 15 }}>
            Logged in as <b>{currentUser.username}</b>
          </div>
        )}
      </LinksContainer>
    </NavigatorContainer>
  )
}

export default function _Header({ home }) {
  const [navigatorOpen, setNavigatorOpen] = useState(false)
  const ref = useRef()
  const dropdownRef = useRef()
  const { logout, user, userAvatar } = useContext(AuthenticationContext)

  useEffect(function () {
    function handleOutsideClick(event) {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        !dropdownRef.current.contains(event.target)
      )
        setNavigatorOpen(false)
    }
    document.addEventListener('mousedown', handleOutsideClick)

    return function () {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  const [showSearchBar, setShowSearchBar] = useState(false)

  function SearchButton() {
    const SearchContainer = styled.div`
      display: flex;
      align-items: center;
      flex-direction: column;
      position: relative;
      margin-left: auto;
      @media screen and (max-width: 700px) {
        display: none;
      }
    `

    return (
      <SearchContainer>
        <a
          onClick={() => {
            setShowSearchBar(!showSearchBar)
            setNavigatorOpen(false)
            setShowOtherOpen(false)
          }}
        >
          <Image
            src={'/search-icon.svg'}
            width={30}
            height={30}
            alt={'search'}
          />
        </a>
      </SearchContainer>
    )
  }

  const [showOtherOpen, setShowOtherOpen] = useState(false)

  function OtherDropdown() {
    return (
      <div style={{ cursor: 'pointer' }}>
        <a
          onClick={() => {
            setShowOtherOpen(!showOtherOpen)
            setShowSearchBar(false)
            setNavigatorOpen(false)
          }}
        >
          <Row>
            <a style={{ marginRight: 13 }}>
              <DropdownText>OTHER</DropdownText>
            </a>
            <Image
              src={'/dropdown.svg'}
              width={16}
              height={16}
              alt={'dropdown'}
            />
          </Row>
        </a>
      </div>
    )
  }

  function OtherOpen() {
    return (
      <OtherDropdownContainer>
        <LinksContainer>
          <Link href={'/support'}>
            <a>
              <DropdownText>SUPPORT</DropdownText>
            </a>
          </Link>
          <Link href={'/events'}>
            <a>
              <DropdownText>EVENTS</DropdownText>
            </a>
          </Link>
        </LinksContainer>
      </OtherDropdownContainer>
    )
  }

  return (
    <HeaderContainer>
      <Header home={home}>
        <Head>
          <title>Premiere</title>
          <meta
            name="description"
            content="Participate in gaming tournaments and receive crypto!"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <LogoBit>
          <LinksDropdown
            ref={dropdownRef}
            onClick={() => {
              setNavigatorOpen(!navigatorOpen)
              setShowSearchBar(false)
            }}
          >
            <Image
              src={navigatorOpen ? '/navigator_open.svg' : '/navigator.svg'}
              width={34}
              height={34}
              alt={'navigator'}
            />
          </LinksDropdown>
          <Link href={'/'}>
            <a>
              <LogoHeader />
            </a>
          </Link>
        </LogoBit>
        {navigatorOpen && (
          <Navigator
            ref={ref}
            currentUser={user}
            isAuthenticated={user ? user.isAuthenticated : null}
          />
        )}
        <LinksBit>
          <Link href={'/games'}>
            <a>
              <DropdownText>GAMES</DropdownText>
            </a>
          </Link>
          <Link href={'/tournaments'}>
            <a>
              <DropdownText>TOURNAMENTS</DropdownText>
            </a>
          </Link>
          <Link href={'/leaderboards'}>
            <a>
              <DropdownText>LEADERBOARDS</DropdownText>
            </a>
          </Link>
          <OtherDropdown />
        </LinksBit>
        <Column>{showOtherOpen && <OtherOpen />}</Column>
        {!user ? (
          <SignupBit>
            <div>
              <SearchButton />
            </div>
            <AvatarPlaceholder />
            <Link href={'/login'}>
              <a>
                <LoginButton>login</LoginButton>
              </a>
            </Link>
          </SignupBit>
        ) : (
          <SignupBit>
            <div>
              <SearchButton />
            </div>
            <div
              onClick={() => Router.push(`/profile`)}
              style={{ cursor: 'pointer', marginTop: 5 }}
            >
              <Avatar src={userAvatar} />
            </div>
            <LogoutButton onClick={logout}>log out</LogoutButton>
          </SignupBit>
        )}
      </Header>
      {showSearchBar ? <SearchBar /> : null}
    </HeaderContainer>
  )
}
