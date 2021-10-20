import styled from 'styled-components'
import { Column, Container, Row, GradientText, Circle } from './common'
import Image from 'next/image'


const YourWeeklyStats = styled.div`
  margin-top: 79px;
  margin-bottom: 55px;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  `

const StatsRow = styled(Row)`
  marign-top: 35px;
  justify-content: space-between;
  width: 758px;
  `

const GrayText = styled.div`
  font-style: Regular;
  font-size: 16px;
  line-height: 24px;
  color: ${props => props.theme.colors.gray};
  letter-spacing: 0.1em;
  font-weight: 400;
  text-transform: uppercase;
` 
const Numbers = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  margin-top: 6px;
`

const EventHistoryRow = styled(Row)`
  margin-top: 46px;
`

const GreyTextColumn = styled(Column)``

const EventHistory = styled(GradientText)`
  margin-right: 24px;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
`

const TopFriends = styled.div`
  margin-top: 84px;
  margin-bottom: 55px;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
`

const FriendsRow = styled(Row)`
  margin-top: 43px;
`

const FriendName = styled.div`
  margin-top: 15px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`

export default function Teams({ tournaments}) {

  const friends = [
    {
      name: 'devonhenry_',
      image: 'devonhenry_',
    },
    {
      name: 'devonhenry_',
      image: 'devonhenry_',
    },
    {
      name: 'devonhenry_',
      image: 'devonhenry_',
    },
    {
      name: 'devonhenry_',
      image: 'devonhenry_',
    },
    {
      name: 'devonhenry_',
      image: 'devonhenry_',
    },
  ]

  return (
      <Container>
        <YourWeeklyStats>Your Weekly Statisctics</YourWeeklyStats>
        <StatsRow>
          <GreyTextColumn>
            <GrayText>events played</GrayText>
            <Numbers>101</Numbers>
          </GreyTextColumn>
          <GreyTextColumn>
            <GrayText>wins</GrayText>
            <Numbers>98</Numbers>
          </GreyTextColumn>
          <GreyTextColumn>
            <GrayText>losses</GrayText>
            <Numbers>3</Numbers>
          </GreyTextColumn>
          <GreyTextColumn>
            <GrayText>$prem earned</GrayText>
            <Numbers>2310994</Numbers>
          </GreyTextColumn>
          <GreyTextColumn>
            <GrayText>usd earned</GrayText>
            <Numbers>$4,301</Numbers>
          </GreyTextColumn>
        </StatsRow>
        <EventHistoryRow>
          <EventHistory>Event History</EventHistory>
          <Image
            src={'/arrow-right-gradient.svg'}
            width={14.89} 
            height={9.3} 
            alt={'arrow-right-gradient'} 
          />
        </EventHistoryRow>
        <TopFriends>Top friends</TopFriends>  
        <FriendsRow>
          {
            friends.map((friend) => 
              <Column style={{ marginRight: 43}}>
                <Image
                  src={`/${friend.image}.svg`} 
                  width={89.74} 
                  height={89.74} 
                  alt={'friend-image'} 
                />
                <FriendName>{friend.name}</FriendName>
              </Column>
            )
          }
        </FriendsRow>
        <Row>
        </Row>
      </Container>
  )
}

