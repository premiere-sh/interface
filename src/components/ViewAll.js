import Image from 'next/image'
import styled from 'styled-components'
import { Center } from 'components/common'

const Container = styled(Center)`
  flex-direction: column;
`

const Text = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  color: ${props => props.theme.colors.black};
`

export default function ViewAll() {
  return (
    <Container>
      <Image src="/arrow_right.svg" width={67} height={67} alt="arrow" />
      <Text style={{ marginTop: 8 }}>VIEW ALL</Text>
    </Container>
  )
}
