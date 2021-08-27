import styled from 'styled-components'
import Image from 'next-image'
import { Center } from 'components/common'

const Tile = styled.div`
  width: 186px;
  height: 292px;
  border-radius: 5px;
`

const Caption = styled(Center)`
  background: #FFFFFF;
  border-radius: 5px;
  width: 146px;
  height: 30px;
  display: flex;
`

export default function GameTile({ game, caption }) {
  return (
    <Tile>
      <Image src={'/' + game + '.svg'} width={69} height={69} />
      <Caption>{caption}</Caption>
    </Tile>
  )
}


/*
  babcia, resistance pop bot, flash loans, wypowiedzenie
*/

