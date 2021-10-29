import Image from 'next/image'
import styled from 'styled-components'
import { Subheading as _Heading, Column, Row } from 'components/common'

const supportSquares = [
  {
    image: 'twitter',
    heading: 'Message us on Twitter',
    text: `DM our Twitter Support account and we’ll get back to you as soon
      as possible.`
  },
  {
    image: 'mail',
    heading: 'Email us',
    text: `Click here to email us - we’ll aim to get back to you as soon as
      possible.`
  },
  {
    image: 'dc',
    heading: 'Join our Discord',
    text: `We have an active group of moderators available for support on
      our discord channel.`
  }
]

const Heading = styled(_Heading)`
  margin-bottom: 27px;
`

const Container = styled(Column)`
  margin-bottom: 150px;
`

const SupportSquareContainer = styled(Column)`
  width: 360px;
  height: 360px;
  align-items: center;
  border: 1px solid #e2e2e2;
  box-sizing: border-box;
  border-radius: 5px;
  &:hover {
    border: 1px solid ${(props) => props.theme.colors.ruby};
  }
  cursor: pointer;
  justify-content: revert;
`

const SupportSquaresRow = styled(Row)`
  justify-content: space-between;
  @media screen and (max-width: 1300px) {
    flex-direction: column;
    & > * {
      margin-bottom: 25px;
    }
  }
`

const Subheading = styled.div`
  margin-bottom: 70px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140.62%;
  color: ${(props) => props.theme.colors.black};
`

const SupportSquareHeading = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 150%;
  color: ${(props) => props.theme.colors.black};
  margin-bottom: 15px;
`

const SupportSquareText = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140.62%;
  text-align: center;
  color: ${(props) => props.theme.colors.black};
  width: 307px;
`

function SupportSquare({ supportSquare }) {
  return (
    <SupportSquareContainer>
      <div style={{ marginTop: 78, marginBottom: 33 }}>
        <Image
          src={`/${supportSquare.image}.svg`}
          width={80}
          height={80}
          alt={supportSquare.image}
        />
      </div>
      <SupportSquareHeading>{supportSquare.heading}</SupportSquareHeading>
      <SupportSquareText>{supportSquare.text}</SupportSquareText>
    </SupportSquareContainer>
  )
}

export default function SupportSection() {
  return (
    <Container>
      <Heading>support</Heading>
      <Subheading>
        We’re here to help - get in touch through any of the methods below!
      </Subheading>
      <SupportSquaresRow>
        {supportSquares.map((supportSquare, idx) => (
          <SupportSquare key={idx} supportSquare={supportSquare} />
        ))}
      </SupportSquaresRow>
    </Container>
  )
}
