import { useState, useEffect, useRef, useContext } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import Image from 'next/image'
import { Row, Column, Container } from 'components/common'
import { DropdownText } from 'components/Dropdown'
import { Button } from 'components/Buttons'
import LogoHeader from 'components/LogoHeader'
import AuthenticationContext from 'contexts/authentication'
import Router from 'next/router'
import SearchBar from 'components/SearchBar'
import GameTile from 'components/GameTile'
import FeaturedTournament from './FeaturedTournament'
import { toast } from 'react-toastify'
import {sendEmailVerification} from 'firebase/auth'

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
  max-width: 200px;
  justify-content: space-between;
  margin-left: 50px;
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
  top: 75px;
  margin-left: -150px;
  align-items: flex-start;
  border-radius: 5px;
  box-shadow: 0px 4px 8px 0px #0000000d;
`

const GamesDropdownContainer = styled(Container)`
  top: 75px;
  display: flex;
  background: #f9f9f9;
  z-index: 13;
  flex-direction: row;
  position: absolute;
  border-radius: 5px;
  box-shadow: 0px 4px 8px 0px #0000000d;
  justify-content: space-between;
`
const CenterDropdown = styled.div`
  display: flex;
  justify-content: center;
`

const ArrowContainer = styled(Column)`
  display: flex;
  justify-content: center;
  flex-align: column;
  margin-right: 3%;
`

const TournamentsDropdownContainer = styled(Container)`
  top: 75px;
  display: flex;
  background: #f9f9f9;
  z-index: 13;
  flex-direction: row;
  position: absolute;
  border-radius: 5px;
  box-shadow: 0px 4px 8px 0px #0000000d;
  justify-content: space-between;
`

const LeaderboardsDropdownContainer = styled(Container)`
  top: 75px;
  height: 130px;
  display: flex;
  background: #f9f9f9;
  z-index: 13;
  flex-direction: row;
  position: absolute;
  border-radius: 5px;
  box-shadow: 0px 4px 8px 0px #0000000d;
  justify-content: space-between;
  align-items: center;
`
const GreyText = styled.div`
  font-family: Inter;
  font-style: Regular;
  font-size: 18px;
  weight: 700;
  line-height: 27px;
  fine-height: 24px;
  color: ${(props) => props.theme.colors.gray};
  letter-spacing: 0.1em;
`
const BlackText = styled.div`
  font-family: Inter;
  font-style: Regular;
  font-size: 16px;
  line-height: 24px;
  weight: 500;
  color: #0c0a09;
  letter-spacing: 0.1em;
  cursor: pointer;
`
const Number = styled.div`
  font-family: Inter;
  font-style: Regular;
  font-size: 24px;
  weight: 600;
  line-height: 36px;
  color: #0c0a09;
  letter-spacing: 0.1em;
`
const RankContainer = styled(Column)`
  margin-left: 3%;
`
const EarnedContainer = styled(Column)`
  margin-right: 15%;
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

export default function _Header({ home, tournaments, games }) {
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
      @media screen and (max-width: 650px) {
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
            setShowGamesOpen(false)
            setShowTournamentsOpen(false)
            setShowLeaderboardsOpen(false)
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
            setShowGamesOpen(false)
            setShowTournamentsOpen(false)
            setShowLeaderboardsOpen(false)
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
  
  if(user && !user.emailVerified){
    toast.error(
      <div>
        <p style={{marginBottom: 10, fontWeight: 'bold'}}>Welcome to Premiere!</p>
        <p style={{marginBottom: 10}}>Please verify your email address by clicking link sent to: 
          <span style={{textDecoration: 'underline', color: 'blue', marginLeft: 5}}>
            {user.auth.currentUser.email}
          </span>
        </p>
        <a onClick={async()=>{
          sendEmailVerification(user)
          .then(()=>alert('Email verification sent! Check your spam folder!'))
          .catch(err=> alert('error'))
          }}>Click here to resend link.</a>
      </div>, 
      {toastId: 'verifyEmail1'})
  }

  const [showGamesOpen, setShowGamesOpen] = useState(false)

  function GamesDropdown() {
    return (
      <div style={{ cursor: 'pointer' }}>
        <a
          onClick={() => {
            setShowGamesOpen(!showGamesOpen)
            setShowOtherOpen(false)
            setShowSearchBar(false)
            setNavigatorOpen(false)
            setShowTournamentsOpen(false)
            setShowLeaderboardsOpen(false)
          }}
        >
          <Row>
            <a style={{ marginRight: 13 }}>
              <DropdownText>Games</DropdownText>
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

  function GamesOpen({ games }) {
    return (
      <>
        <GamesDropdownContainer>
          {games &&
            games.map(
              (game, key) =>
                key < 5 && (
                  <div
                    key={key}
                    style={{ width: 210, height: 300, margin: 20 }}
                  >
                    <GameTile game={game.name} caption={game.caption} />
                  </div>
                )
            )}
          <ArrowContainer style={{ cursor: 'pointer' }}>
            <Link href={'/games'} passHref>
              <Column>
                <Image
                  src={'/arrow_right.svg'}
                  width={50}
                  height={50}
                  alt={'arrow_right'}
                />
                <BlackText>View All</BlackText>
              </Column>
            </Link>
          </ArrowContainer>
        </GamesDropdownContainer>
      </>
    )
  }

  const [showTournamentsOpen, setShowTournamentsOpen] = useState(false)

  function TournamentsDropdown() {
    return (
      <div style={{ cursor: 'pointer' }}>
        <a
          onClick={() => {
            setShowTournamentsOpen(!showTournamentsOpen)
            setShowGamesOpen(false)
            setShowOtherOpen(false)
            setShowSearchBar(false)
            setNavigatorOpen(false)
            setShowLeaderboardsOpen(false)
          }}
        >
          <Row>
            <a style={{ marginRight: 13 }}>
              <DropdownText>Tournaments</DropdownText>
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

  function TournamentsOpen({}) {
    return (
      <>
        <TournamentsDropdownContainer>
          {tournaments &&
            tournaments.map(
              (tournament, key) =>
                key < 2 && (
                  <div
                    key={key}
                    style={{
                      width: 210,
                      height: 300,
                      margin: 20,
                      marginBottom: -10
                    }}
                  >
                    <FeaturedTournament
                      tournament={tournament}
                      roundBorders={true}
                    />
                  </div>
                )
            )}
          <ArrowContainer style={{ cursor: 'pointer' }}>
            <Link href={'/tournaments'} passHref>
              <Column>
                <Image
                  src={'/arrow_right.svg'}
                  width={50}
                  height={50}
                  alt={'arrow_right'}
                />
                <BlackText>View All</BlackText>
              </Column>
            </Link>
          </ArrowContainer>
        </TournamentsDropdownContainer>
      </>
    )
  }

  const [showLeaderboardsOpen, setShowLeaderboardsOpen] = useState(false)

  function LeaderboardsDropdown() {
    return (
      <div style={{ cursor: 'pointer' }}>
        <a
          onClick={() => {
            setShowLeaderboardsOpen(!showLeaderboardsOpen)
            setShowTournamentsOpen(false)
            setShowGamesOpen(false)
            setShowOtherOpen(false)
            setShowSearchBar(false)
            setNavigatorOpen(false)
          }}
        >
          <Row>
            <a style={{ marginRight: 13 }}>
              <DropdownText>Leaderboards</DropdownText>
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

  function LeaderboardsOpen() {
    return (
      <LeaderboardsDropdownContainer>
        <RankContainer>
          <GreyText>Your [COUNTRY] position</GreyText>
          <Number>#1452</Number>
        </RankContainer>
        <Image
          src={'/socials_divider.svg'}
          height={63}
          width={1.5}
          alt={'social'}
        />
        <Link href={'/leaderboards/?sort=byRank'} passHref>
          <BlackText>GB RANK</BlackText>
        </Link>
        <Image
          src={'/socials_divider.svg'}
          height={63}
          width={1.5}
          alt={'social'}
        />
        <Link href={'/leaderboards/?sort=byWins'} passHref>
          <BlackText>WINS</BlackText>
        </Link>
        <Image
          src={'/socials_divider.svg'}
          height={63}
          width={1.5}
          alt={'social'}
        />
        <EarnedContainer>
          <Link href={'/leaderboards/?sort=byPrem'} passHref>
            <BlackText>$PREM EARNED</BlackText>
          </Link>
        </EarnedContainer>
        <ArrowContainer style={{ cursor: 'pointer' }}>
          <Link href={'/leaderboards'} passHref>
            <Column>
              <Image
                src={'/arrow_right.svg'}
                width={50}
                height={50}
                alt={'arrow_right'}
              />
              <BlackText>Leaderboards</BlackText>
            </Column>
          </Link>
        </ArrowContainer>
      </LeaderboardsDropdownContainer>
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
          <GamesDropdown />
          <TournamentsDropdown />
          <LeaderboardsDropdown />
          <OtherDropdown />
        </LinksBit>
        <Column>{showOtherOpen && <OtherOpen />}</Column>
        <SignupBit>
          {!user ? (
            <>
              <SearchButton />
              <AvatarPlaceholder />
              <Link href={'/login'}>
                <a>
                  <LoginButton>login</LoginButton>
                </a>
              </Link>
            </>
          ) : (
            <>
              <SearchButton />
              <div
                onClick={() => Router.push(`/profile`)}
                style={{ cursor: 'pointer', marginTop: 5 }}
              >
                <Avatar src={userAvatar} />
              </div>
              <LogoutButton onClick={logout}>log out</LogoutButton>
            </>
          )}
        </SignupBit>
      </Header>
      {showSearchBar ? <SearchBar /> : null}
      <CenterDropdown>
        {showGamesOpen && <GamesOpen games={games} />}
      </CenterDropdown>
      <CenterDropdown>
        {showTournamentsOpen && <TournamentsOpen tournamets={tournaments} />}
      </CenterDropdown>
      <CenterDropdown>
        {showLeaderboardsOpen && <LeaderboardsOpen />}
      </CenterDropdown>
    </HeaderContainer>
  )
}
