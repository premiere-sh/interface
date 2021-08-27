import styled from 'styled-components'
import Image from 'next/image'
import { Center, GradientText } from 'components/common'

const Tile = styled.div`
  width: 211px;
  height: 292px;
  border-radius: 5px;
`

const Caption = styled(Center)`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  background: #FFFFFF;
  border-radius: 5px;
  width: 146px;
  height: 30px;
  position: relative;
  bottom: 38px;
  margin-left: auto;
  margin-right: auto;
  width: 165px;
  height: 34px;
  background: #ffffff;
  border-radius: 5px;
  filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.1));
`

export default function GameTile({ game, caption }) {
  return (
    <Tile>
      <Image src={'/' + game + '.svg'} width={211} height={296} />
      <Caption>
        <GradientText>
          {caption}
        </GradientText>
      </Caption>
    </Tile>
  )
}

/*
  babcia, resistance pop bot, flash loans, wypowiedzenie
*/

