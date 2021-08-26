import styled from 'styled-components'
import Image from 'next/image'
import { Row } from 'components/common'

export const DropdownText = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.1em;
  color: ${props => props.theme.colors.black};
  user-select: none;
`

export default function _Dropdown({ text }) {
  return (
    <Row>
      <DropdownText>{text}</DropdownText>
      <div style={{ marginLeft: 10, marginTop: 5 }}>
        <Image src={'/dropdown.svg'} width={16} height={16} />
      </div>
    </Row>
  )
}
