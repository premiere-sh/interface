import { useContext } from 'react'
import styled from 'styled-components'
import { Column, Container, Row } from 'components/common'
import { useState } from 'react'
import Friends from 'components/Friends'
import Home from 'components/ProfileHome'
import Link from 'next/link'
import AuthenticationContext from 'contexts/authentication'
import { useFriends, useStats } from 'hooks'
import { useFriendInvites } from 'hooks'
import AvatarEditor from 'react-avatar-editor'
import { Button as EditImageButton } from 'components/Buttons'
import { Box, Slider } from '@material-ui/core'
import Image from 'next/image'
import { motion } from 'framer-motion'

const ProfilePanel = styled(Row)`
  width: 100%;
  justify-content: space-between;
  height: 220px;
`

const ProfileData = styled(Row)``

const ProfileButtons = styled(Column)`
  height: 220px;
  justify-content: space-between;
`

const Name = styled.div`
  font-size: 36px;
  line-height: 36px;
  font-style: italic;
  font-weight: 700;
`

const Wrapper = styled(Container)`
  border-bottom: 1px solid #e3e3e3;
  margin-bottom: 79px;
`

const Team = styled.div`
  font-family: Inter;
  font-style: Normal;
  font-weight: 600;
  font-size: 18px;
  fine-height: 27px;
  color: ${(props) => props.theme.colors.gray};
  margin-bottom: 40px;
`

const ProfileInfo = styled(Column)`
  margin-left: 52px;
`

const ProfileStats = styled(Row)``

const GreyTextColumn = styled(Column)`
  margin-right: 42px;
`

const GreyText = styled.div`
  font-style: Regular;
  font-size: 16px;
  fine-height: 24px;
  color: ${(props) => props.theme.colors.gray};
  letter-spacing: 0.1em;
  text-transform: uppercase;
`

const ArrowColumn = styled(Column)`
  justify-content: center;
  margin-right: 50px;
`

const Numbers = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  margin-top: 6px;
  margin-bottom: 12px;
`

const ButtonWrapper = styled(Row)`
  justify-content: space-between;
  margin-top: 79px;
  width: 100%;
`

const Button = styled.div`
  font-size: 20px;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: 0.1em;
  border-bottom: 0px solid;
  border-image-source: linear-gradient(
    266.89deg,
    #982649 -18.13%,
    #f71735 120.14%
  );
  border-image-slice: 1;
  text-transform: uppercase;
  padding: 40px 23px 23px 23px;
  user-select: none;
  &:hover {
    cursor: pointer;
  }
`

const ButtonHome = styled(Button)`
  padding-left: 0px;
  padding-right: 23px;
`

const ButtonEvents = styled(Button)`
  padding-left: 23px;
  padding-right: 0px;
`

const Avatar = styled.img`
  display: block;
  border-radius: 50%;
  z-index: 10;
`

const AvatarContainer = styled.div`
  z-index: 11;
  background: rgb(243, 243, 244);
`

const EditProfileButton = styled.div``

const EditAvatarRow = styled(Row)`
  z-index: 12;
  background: rgb(243, 243, 244);
`

const EditAvatarColumn = styled(motion.div)`
  display: flex;
  flex-direction: column;
  height: 220px;
  justify-content: space-around;
  width: 180px;
  z-index: 1;
`

const EditAvatarButtons = styled(Row)`
  justify-content: space-between;
`

const SliderText = styled.div``

export default function ProfileTop() {
  const [selected, setSelected] = useState('Home')
  const { user, userAvatar, token } = useContext(AuthenticationContext)
  const friends = useFriends(user)
  const stats = useStats(user)
  const { invites, avatars } = useFriendInvites(user?.id, token)
  var editor = ''
  const [tempAvatar, setTempAvatar] = useState(userAvatar)
  const [zoom, setZoom] = useState(1)
  const [picture, setPicture] = useState({
    cropperOpen: false,
    img: tempAvatar,
    zoom: 1,
    croppedImg: ''
  })

  const handleSlider = (event, value) => {
    setPicture({
      ...picture,
      zoom: value
    })
  }

  const handleCancel = () => {
    setPicture({
      ...picture,
      cropperOpen: false
    })
  }

  const setEditorRef = (ed) => {
    editor = ed
  }

  const handleSave = (e) => {
    if (setEditorRef) {
      const canvasScaled = editor.getImageScaledToCanvas()
      const croppedImg = canvasScaled.toDataURL()

      setPicture({
        ...picture,
        img: null,
        cropperOpen: false,
        croppedImg: croppedImg
      })
    }
  }

  const handleFileChange = (e) => {
    let url = URL.createObjectURL(e.target.files[0])
    setTempAvatar(url)
    console.log(url)
    setPicture({
      ...picture,
      img: url
    })
  }

  const handleEditMode = () => {
    setZoom(picture.zoom)
    setPicture({
      ...picture,
      cropperOpen: !picture.cropperOpen,
      img: tempAvatar
    })
  }

  return (
    <Column>
      <Wrapper>
        <ProfilePanel>
          <ProfileData>
            {userAvatar && user && !picture.cropperOpen ? (
              <AvatarContainer>
                <Avatar src={picture.croppedImg} />
              </AvatarContainer>
            ) : (
              <EditAvatarRow display="block">
                <AvatarEditor
                  ref={setEditorRef}
                  image={picture.img}
                  width={220}
                  height={220}
                  border={0}
                  borderRadius={150}
                  color={[243, 243, 244, 0.9]} // RGBA
                  rotate={0}
                  scale={picture.zoom}
                />
              </EditAvatarRow>
            )}
            <EditAvatarColumn
              initial={false}
              animate={{ marginLeft: !picture.cropperOpen ? -200 : 30 }}
              transition={{
                ease: 'easeOut',
                duration: 0.25
              }}
            >
              <SliderText>Drag and resize</SliderText>
              <Slider
                aria-label="raceSlider"
                value={picture.zoom}
                min={1}
                max={5}
                step={0.1}
                onChange={handleSlider}
              ></Slider>
              <EditAvatarButtons>
                <EditImageButton variant="contained" onClick={handleCancel}>
                  Cancel
                </EditImageButton>
                <EditImageButton onClick={handleSave}>Save</EditImageButton>
              </EditAvatarButtons>
              <input type="file" accept="image/*" onChange={handleFileChange} />
            </EditAvatarColumn>
            <ProfileInfo>
              <Name>{user?.username || user?.email}</Name>
              <ProfileStats>
                <GreyTextColumn>
                  <GreyText>rank</GreyText>
                  <Numbers>{stats?.rank ?? '-'}</Numbers>
                </GreyTextColumn>
                <GreyTextColumn>
                  <GreyText>weekly wins</GreyText>
                  <Numbers>{stats?.weeklyWins ?? 0}</Numbers>
                </GreyTextColumn>
                <GreyTextColumn>
                  <GreyText>Friends</GreyText>
                  <Numbers>{friends.length}</Numbers>
                </GreyTextColumn>
              </ProfileStats>
            </ProfileInfo>
          </ProfileData>
          <ProfileButtons>
            <EditProfileButton>
              <Image
                src={'/edit_profile.svg'}
                width={32}
                height={32}
                alt={'edit'}
                onClick={handleEditMode}
              />
            </EditProfileButton>
            <EditProfileButton>
              <Image
                src={'/edit_profile.svg'}
                width={32}
                height={32}
                alt={'placeholder'}
              />
            </EditProfileButton>
          </ProfileButtons>
        </ProfilePanel>
        <ButtonWrapper>
          <ButtonHome
            style={{ borderBottom: `${selected == 'Home' ? 1 : 0}px solid` }}
            onClick={() => setSelected('Home')}
          >
            home
          </ButtonHome>
          <Button
            style={{ borderBottom: `${selected == 'History' ? 1 : 0}px solid` }}
            onClick={() => setSelected('History')}
          >
            event history
          </Button>
          <Button
            style={{ borderBottom: `${selected == 'Friends' ? 1 : 0}px solid` }}
            onClick={() => setSelected('Friends')}
          >
            friends
          </Button>
          <Link href={'/events'}>
            <a style={{ color: 'inherit' }}>
              <ButtonEvents>upcoming events</ButtonEvents>
            </a>
          </Link>
        </ButtonWrapper>
      </Wrapper>
      {selected == 'Friends' && (
        <Friends friends={friends} invites={invites} avatars={avatars} />
      )}
      {selected == 'Home' && <Home />}
    </Column>
  )
}
