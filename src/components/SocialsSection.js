import {
  Discord, 
  Instagram,
  Twitter, 
  Telegram,
  Youtube, 
  SocialsDivider 
} from 'components/Socials'
import { Row as _Row, Column as _Column} from 'components/common'
import styled from 'styled-components'

const Row = styled(_Row)`
  height: 125px;
  justify-content: space-between;
  width: min(60%, 864px);
  margin: auto;
`

const Column = styled(_Column)`
  height: 100%;
`

const Text1= styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 150%;
  text-align: center;
  color: ${props => props.theme.colors.black};
`

const Text2 = styled.div`
  font-family: Inter;
  font-style: italic;
  font-weight: bold;
  font-size: 45px;
  line-height: 100%;
  color: ${props => props.theme.colors.black};
`

const SocialsRow = styled(_Row)`
  width: 306px;
  justify-content: space-between;
`

export default function SocialsSection() {
  return (
    <Row>
      <_Row>
        <div style={{ marginRight: 50 }}>
          <Discord />
        </div>
        <Column>
          <Text1>
            Connect with us
          </Text1>
          <Text2>
            1345
          </Text2>
        </Column>
      </_Row>
      <SocialsDivider style={{ position: 'relative', alignSelf: 'center' }} />
      <SocialsRow>
        <Instagram />
        <Twitter />
        <Youtube />
        <Telegram />
        </SocialsRow>
    </Row>
  )
}
