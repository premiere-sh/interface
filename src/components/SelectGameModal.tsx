import Modal from 'react-modal'
import { useState } from 'react'
import styled from 'styled-components'
import { Row } from 'components/common'
import Image from 'next/image'
import { Heading } from 'components/Forms'
import { Button } from 'components/Buttons'

const GamesRow = styled(Row)`
  align-items: end;
  &:hover {
    cursor: pointer;
  }
`

const GameModal = styled(Modal)`
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 900px;
  height: 460px;
  background: #ffffff;
  border: 1px solid black;
  padding: 50px 40px 0px 40px;
`

const Dots = styled.div`
  font-size: 40px;
  margin-bottom: -5px;
`

const SelectGameRow = styled(Row)`
  height: 292px;
  overflow-x: scroll;
  overflow-y: hidden;
`

const CancelButton = styled(Button)`
  width: 129px;
  height: 36px;
  margin-right: 10px;
`

const SelectButton = styled(Button)`
  width: 129px;
  height: 36px;
`

const ButtonsRow = styled(Row)`
  justify-content: center;
  margin-top: 10px;
  position: absolute;
  right: 50px;
`
const Tile = styled.div`
  width: 211;
  height: 292;
  border-radius: 5px;
  position: relative;
  &:hover {
    opacity: 0.8;
  }
`

function Game({ game }) {
  return (
    <Tile>
      <Image src={'/' + game + '.svg'} width={211} height={292} alt={'game'} />
    </Tile>
  )
}

export default function SelectGameModal() {
  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false)
  }

  const games = [
    {
      name: 'csgo'
    },
    {
      name: 'rl'
    },
    {
      name: 'dirt'
    },
    {
      name: 'cod'
    }
  ]

  return (
    <div>
      <GamesRow onClick={openModal}>
        {games
          .map((games, idx) =>
            idx < 3 ? (
              <Image
                src={`/${games.name}.svg`}
                width={60}
                height={60}
                alt={games.name}
                objectFit={'cover'}
                style={{
                  borderRadius: 15
                }}
                key={idx}
              />
            ) : null
          )
          .sort(() => Math.random() - 0.5)}
        <Dots>...</Dots>
      </GamesRow>
      <GameModal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
      >
        <Heading>Select Game</Heading>
        <SelectGameRow>
          {games.map((games, idx) => (
            <Game game={games.name} key={idx} />
          ))}
        </SelectGameRow>
        <ButtonsRow>
          <CancelButton onClick={closeModal}>Cancel</CancelButton>
          <SelectButton onClick={closeModal}>Select</SelectButton>
        </ButtonsRow>
      </GameModal>
    </div>
  )
}
