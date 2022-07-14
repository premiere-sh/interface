import styled from 'styled-components'
import { Column } from 'components/common'

const Container = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: relative;
`

const MenuColumn = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: absolute;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(12, 10, 9, 0.4);
  color: ${(props) => props.theme.colors.white};
  user-select: none;
  flex-direction: column;
`

const ImageEntry = styled(Column)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`
const ImageInput = styled.input`
  width: 200px;
`

const SaveImageButton = styled.button``

function Menu({ handleUploadImage, handleSaveImage }) {
  return (
    <MenuColumn>
      <ImageInput type="file" name="avatar" onChange={handleUploadImage} />
      <SaveImageButton type="submit" onClick={handleSaveImage}>
        Save Image
      </SaveImageButton>
    </MenuColumn>
  )
}

export default function UploadAvatar({
  tempAvatar,
  handleSaveImage,
  handleUploadImage
}) {
  return (
    <Container>
      <Menu
        handleSaveImage={handleSaveImage}
        handleUploadImage={handleUploadImage}
      />
      <ImageEntry
        style={{
          backgroundImage: `url('${tempAvatar}')`,
          backgroundSize: '200px 200px'
        }}
      />
    </Container>
  )
}
