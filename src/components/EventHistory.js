import styled from 'styled-components'
import { Container, Row, Column } from './common'
import Image from 'next/image'

const RecentEvents = styled.div`
  font-weight: 600;
  font-size: 26px;
  line-height: 31px;
  line-height: 100%;
  transform: translateY(-86px);
  `

  const SpaceBetween = styled(Row)`
  justify-content: space-between;
  background: white;
  `
  const Title = styled.div`
  font-family: Inter;
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  line-height: 100%;
`



export default function EventHistory() {
  return (
    <div>
      <Container style={{ height: 436 }}>
        <SpaceBetween >
          <div>
            <Image 
              src={'/csgo.svg'} 
              width={289} 
              height={436} 
              alt={'csgo-image'} 
            />
          </div>
          <Column>
          <Row> chuj chuj</Row>
          <Row> chuj chuj</Row>
          </Column>
        </SpaceBetween>
      </Container>
    </div>
}
