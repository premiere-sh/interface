import { useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Center, GradientText, Circle } from 'components/common'

const Tile = styled.div`
  width: 211px;
  height: 292px;
  border-radius: 5px;
  position: relative;
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
  z-index: 3;
`

const MenuContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  position: absolute;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(12, 10, 9, 0.4);
  color: ${props => props.theme.colors.white};
  user-select: none;
`

const CircleRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 28px;
  margin-right: 28px;
  width: 100%;
  opacity: 1;
`

function Menu({ game }) {
  return (
    <MenuContainer>
      <CircleRow>
        <Circle>
          <Image 
            src={'/xplay.svg'}
            width={24}
            height={24}
            alt={'xplay'}
          />
        </Circle>
        <Circle>
          <Image 
            src={'/laptop.svg'}
            width={24}
            height={24}
            alt={'laptop'}
          />
        </Circle>
        <Circle>
          <Image 
            src={'/logo-xbox.svg'}
            width={24}
            height={24}
            alt={'xbox'}
          />
        </Circle>
      </CircleRow>
    </MenuContainer>
  )
}

export default function GameTile({ game, caption }) {
  const [hover, setHover] = useState(false)
  return (
    <Tile 
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {
        hover &&
        <Menu game={game} />
      }
      <Image 
        src={'/' + game + '.svg'} 
        width={211} 
        height={296} 
        alt={'game'} 
      />
      <Caption>
        <GradientText>
          {caption}
        </GradientText>
      </Caption>
    </Tile>
  )
}

