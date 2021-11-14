import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Row, Column, GradientText } from 'components/common'
import { ArrowButton } from 'components/Buttons'

const Container = styled(Row)`
  justify-content: space-between;
  margin-bottom: 150px;
  @media screen and (max-width: 1100px) {
    flex-direction: column;
  }
`

const SideColumn = styled(Column)`
  margin-left: 77px;
  @media screen and (max-width: 1100px) {
    margin-top: 30px;
    margin-left: 0px;
  }
`

const Heading = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  color: ${(props) => props.theme.colors.black};
  margin-bottom: 20px;
`

const Subtext = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140.62%;
  color: ${(props) => props.theme.colors.black};
  margin-bottom: 50px;

`

const VideoContainer = styled.div`
  position: relative;
`

const Caption = styled.div`
  position: absolute;
  width: 287px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  background: #ffffff;
  border-radius: 5px;
  top: 335px;
  right: 25%;
  left: 25%;
`

function Video({ src, caption }) {
  const vid = useRef()

  useEffect(function () {
    vid.current.play()
  }, [])

  return (
    <VideoContainer>
      <video
        ref={vid}
        width={584}
        height={373}
        muted={true}
        controls={false}
        loop={true}
      >
        <source src={src} type={'video/mp4'} />
      </video>
      <Caption>
        <GradientText>{caption}</GradientText>
      </Caption>
    </VideoContainer>
  )
}

export default function WelcomeToPremiere() {
  return (
    <Container>
      <Video
        src={'https://media.w3.org/2010/05/sintel/trailer.mp4'}
        caption={'Featured clip - @devonhenry_'}
      />
      <SideColumn>
        <Heading>Welcome to Premiere</Heading>
        <Subtext>
          Premiere is a ...Premiere is a ...Premiere is a ...Premiere is a
          ...Premiere is a ...Premiere is a ...Premiere is a ...Premiere is a
          ...Premiere is a ...Premiere is a ...Premiere is a ...Premiere is a
          ...Premiere is a ...Premiere is a ...
        </Subtext>
        <ArrowButton text={'meet the team'} />
      </SideColumn>
    </Container>
  )
}
