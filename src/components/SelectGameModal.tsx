import Modal from 'react-modal'
import { useState } from 'react'
import styled from 'styled-components'
import { Row } from 'components/common'
import { Heading, Input } from 'components/Forms'
import { Button } from 'components/Buttons'
import { motion } from 'framer-motion'

const GamesRow = styled(motion.div)`
  display: flex;
  flex-direction: row;
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
  z-index: 50;
`

const Dots = styled(motion.div)`
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

const ImageWrapper = styled(motion.div)``

const GameImage = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  border-right: 7px solid rgb(243, 243, 244);
  background: no-repeat center;
  background-size: 70px;
`

const SelectedGameImage = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  border-right: 7px solid rgb(243, 243, 244);
  background: no-repeat center;
  background-size: 70px;
  &: before {

  }
`

const GameInput = styled.input``

function OpenModalButton({ openModal, games }) {
  const [isHover, setHover] = useState(false)

  return (
    <GamesRow
      onClick={openModal}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {games.map((games, idx) =>
        idx < 3 ? (
          <ImageWrapper
            style={{
              zIndex: 3 - idx
            }}
            initial={false}
            animate={{ marginRight: isHover ? 0 : -15 }}
            key={idx}
          >
            <GameImage
              style={{
                backgroundImage: `url('/${games.name}.svg')`
              }}
            />
          </ImageWrapper>
        ) : null
      )}
      <Dots initial={false} animate={{ marginLeft: isHover ? -10 : 5 }}>
        ...
      </Dots>
    </GamesRow>
  )
}

function OpenModalButtonSelected({ openModal, selectedGame }) {
  const [isHover, setHover] = useState(false)

  return (
    <GamesRow
      onClick={openModal}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <ImageWrapper
        style={{
          zIndex: 3
        }}
        initial={false}
        animate={{ marginRight: isHover ? 0 : -15 }}
      >
        <SelectedGameImage
          style={{
            backgroundImage: `url('/${selectedGame}.svg')`
          }}
        />
      </ImageWrapper>
      <Dots initial={false} animate={{ marginLeft: isHover ? -10 : 5 }}>
        ...
      </Dots>
    </GamesRow>
  )
}

export default function SelectGameModal({
  handleGameSelect,
  selectedGame,
  games,
  cancel
}) {
  const [modalIsOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const afterOpenModal = () => {}

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <div>
      {selectedGame ? (
        <OpenModalButtonSelected
          openModal={openModal}
          selectedGame={selectedGame}
        />
      ) : (
        <OpenModalButton openModal={openModal} games={games} />
      )}
      <GameModal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={() => {
          closeModal()
          cancel()
        }}
        ariaHideApp={false}
        style={{ overlay: { zIndex: 30 } }}
        games={games}
      >
        <Heading>Select Game</Heading>
        <SelectGameRow>
          {games.map((games, idx) => (
            <Tile key={idx}>
              <GameInput
                type={'image'}
                src={'/' + games.name + '.svg'}
                width={211}
                height={292}
                onClick={handleGameSelect}
                value={games.name}
              />
            </Tile>
          ))}
        </SelectGameRow>
        <ButtonsRow>
          <CancelButton
            onClick={() => {
              closeModal()
              cancel()
            }}
          >
            Cancel
          </CancelButton>
          <SelectButton onClick={closeModal}>Select</SelectButton>
        </ButtonsRow>
      </GameModal>
    </div>
  )
}
