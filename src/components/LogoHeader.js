import styled from 'styled-components'
import Image from 'next/image'
import { Row } from 'components/common'

const LogoHeader = styled.div`
  font-family: Inter;
  font-style: italic;
  font-weight: 800;
  font-size: 24px;
  line-height: 150%;
  letter-spacing: 0.2em;
  color: ${(props) => props.theme.colors.black};
  user-select: none;
  @media screen and (max-width: 480px) {
    display: none;
`

export default function _LogoHeader() {
  return (
    <Row>
      <div style={{ marginRight: 14, marginTop: 3 }}>
        <Image
          src={'/diamond_logo.svg'}
          width={32}
          height={28.4}
          alt={'diamond'}
        />
      </div>
      <LogoHeader>PREMIERE</LogoHeader>
    </Row>
  )
}
