import Image from 'next/image'
import styled from 'styled-components'
import { LeaderboardTitle, Row, Column, GradientText } from 'components/common'
import { useRouter } from 'next/router'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { toast } from 'react-toastify'

const PlayerRow = styled(Row)``

const StatsRow = styled(Row)`
  margin-top: 50px;
  margin-bottom: 90px;
`

const PlayerName = styled.div`
  font-family: Inter;
  font-style: italic;
  font-weight: bold;
  font-size: 36px;
  line-height: 100%;
  color: ${(props) => props.theme.colors.black};
  margin-bottom: 8px;
`

const MemberSince = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  color: ${(props) => props.theme.colors.gray};
`

const StatColumn = styled(Column)`
  margin-right: 29px;
`

const StatHeading = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.1em;
  color: ${(props) => props.theme.colors.gray};
  text-transform: uppercase;
`

const Stat = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  color: ${(props) => props.theme.colors.black};
`

const ShareRow = styled(Row)`
  margin-bottom: 50px;
`

const CopyLinkContainer = styled(CopyToClipboard)`
  width: 183px;
  height: 44px;
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const CopyLinkText = styled(GradientText)`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  text-align: right;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-left: 10px;
  user-select: none;
`

const Avatar = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 70px;
`

function CopyLink() {
  return (
    <CopyLinkContainer
      text={'https://www.premiere.sh/leaderboards'}
      onCopy={() => toast.success('link copied')}
    >
      <div>
        <Image
          src={'/copy_link.svg'}
          width={24}
          height={24}
          alt={'copy-link'}
        />
        <CopyLinkText>copy link</CopyLinkText>
      </div>
    </CopyLinkContainer>
  )
}

export default function PlayerOfTheWeek({ user, avatar }) {
  const router = useRouter()

  return (
    <div>
      <LeaderboardTitle>Player of the week</LeaderboardTitle>
      <PlayerRow>
        <div
          style={{ marginRight: 20, cursor: 'pointer' }}
          onClick={
            user?.id ? () => router.push(`/profile/${user.id}`) : () => null
          }
        >
          {avatar && <Avatar src={avatar} />}
        </div>
        <Column>
          <PlayerName>{user?.username}</PlayerName>
          <MemberSince>{user?.since}</MemberSince>
        </Column>
      </PlayerRow>
      <StatsRow>
        <StatColumn>
          <StatHeading>rank</StatHeading>
          <Stat>{user?.rank ?? '-'}</Stat>
        </StatColumn>
        <StatColumn>
          <StatHeading>weekly wins</StatHeading>
          <Stat>{user?.weeklyWins ?? '-'}</Stat>
        </StatColumn>
      </StatsRow>
      <LeaderboardTitle>Share this page</LeaderboardTitle>
      <ShareRow>
        <CopyLink />
        <a
          style={{ marginTop: 12, marginLeft: 10, cursor: 'pointer' }}
          href="https://www.instagram.com"
        >
          <Image
            src={'/instagram_button.svg'}
            width={64}
            height={64}
            alt={'button'}
          />
        </a>
        <a
          style={{ marginTop: 12, cursor: 'pointer' }}
          href="https://twitter.com/intent/tweet?via=premiere_sh&text=Some%20tweet%20text%20here"
        >
          <Image
            src={'/twitter_button.svg'}
            width={64}
            height={64}
            alt={'button'}
          />
        </a>
      </ShareRow>
    </div>
  )
}
