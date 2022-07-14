import {
  Discord,
  Instagram,
  Twitter,
  Telegram,
  Youtube,
  SocialsDivider
} from 'components/Socials'
import { Row as _Row, Column as _Column } from 'components/common'
import styled from 'styled-components'

const Row = styled(_Row)`
  height: 125px;
  justify-content: space-between;
  width: min(60%, 864px);
  margin: auto;
  @media screen and (max-width: 1065px) {
    flex-direction: column;
    height: 200px;
  }
`

const Column = styled(_Column)`
  height: 100%;
`

const Text1 = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 1.5em;
  line-height: 150%;
  text-align: center;
  color: ${(props) => props.theme.colors.black};
  @media screen and (max-width: 1065px) {
    font-size: 1.2em
  }
`

const Text2 = styled.div`
  font-family: Inter;
  font-style: italic;
  font-weight: bold;
  font-size: 3em;
  line-height: 100%;
  color: ${(props) => props.theme.colors.black};
  @media screen and (max-width: 1065px) {
    font-size: 35px;
    text-align: center;
  }
`

const SocialsRow = styled(_Row)`
  width: 306px;
  justify-content: space-between;
`

const SocialsDividerContainer = styled.div`
  @media screen and (max-width: 1065px) {
    display: none;
  }
`

export default function SocialsSection() {
  return (
    <Row>
      <_Row>
        <div style={{ marginRight: 50 }}>
          <Discord />
        </div>
        <Column>
          <Text1>Connect with us</Text1>
          <Text2>1345</Text2>
        </Column>
      </_Row>
      <SocialsDividerContainer>
        <SocialsDivider style={{ position: 'relative', alignSelf: 'center' }} />
      </SocialsDividerContainer>
      <SocialsRow>
        <Instagram />
        <Twitter />
        <Youtube />
        <Telegram />
      </SocialsRow>
    </Row>
  )
}
