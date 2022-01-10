import Image from "next/image"
import { GradientText, Row } from "components/common"
import styled from "styled-components"

const Text = styled(GradientText)`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.1em;
  margin-bottom: 80px;
`

export default function GradientDropdown({ text }) {
  return (
    <Row>
      <div style={{ marginBottom: 76, marginRight: 22 }}>
        <Image src={"/dropdown.svg"} width={16} height={16} alt={"dropdown"} />
      </div>
      <Text>{text}</Text>
    </Row>
  )
}
