import styled from 'styled-components'
import { Row, Column } from 'components/common'
import Image from 'next/image'
import { ViewTournamentsButton } from 'components/Buttons'

const Heading = styled.div`
  font-family: Inter;
  font-style: italic;
  font-weight: bold;
  font-size: 78px;
  line-height: 150%;
  letter-spacing: 0.055em;
  color: ${props => props.theme.colors.black};
  text-transform: uppercase;
  margin-bottom: 10px;
`

const Container = styled(Row)`
  align-items: center;
  justify-content: space-between;
  margin-bottom: 150px;
`

const SideColumn = styled(Column)``

const Subheading = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 150%;
  color: ${props => props.theme.colors.black};
  margin-bottom: 70px;
`

export default function HomeHeading() {
  return (
    <Container>
      <SideColumn>
        <Heading>Premiere</Heading>
        <Subheading>
          Earn cryptocurrency playing your favourite games
        </Subheading>
        <ViewTournamentsButton />
      </SideColumn>
      <Image src="/guys.svg" width={488} height={340} alt="guys" />
    </Container>
  )
}
