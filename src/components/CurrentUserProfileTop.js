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
import { Button as AvatarButton } from 'components/Buttons'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Teams from 'components/Teams'
import EventHistory from 'components/ProfileHistory'
import { ShareButton } from 'components/Buttons'

const ProfilePanel = styled(Row)`
  width: 100%;
  justify-content: space-between;
  height: 220px;
`

const ProfileData = styled(Row)``

const Name = styled.div`
  font-size: 36px;
  line-height: 36px;
  font-style: italic;
  font-weight: 700;
`

const Wrapper = styled(Container)`
  display: flex;
  flex: 1;
  flex-direction: column;
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

const ProfileButtons = styled(Row)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 220px;
`

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

const Joined = styled.div`
  font-size: 20px;
  line-height: 42px;
  font-weight: 500;
  margin-bottom:50px;
  color: ${(props) => props.theme.colors.gray};
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
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin-top: 79px;
  width: 100%;
`

const Button = styled.div`
  font-size: 20px;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: 0.1em;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
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
  border: 3px solid #982649;
`

const AvatarContainer = styled.div`
  z-index: 11;
  background: rgb(243, 243, 244);
`

const EditProfileButton = styled.div``

const ShareProfileButton = styled.div``

const EditAvatarRow = styled(Row)`
  z-index: 12;
  background: rgb(243, 243, 244);
`

const EditAvatarColumn = styled(motion.div)`
  display: flex;
  flex-direction: column;
  height: 160px;
  justify-content: space-around;
  width: 180px;
  z-index: 1;
  width: 200px;
  margin-left: 20px;
`

const EditAvatarButtons = styled(Column)``

const SliderText = styled.div`
  font-size: 20px;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: 0.07em;
  border-bottom: 0px solid;
  border-image-source: linear-gradient(
    266.89deg,
    #982649 -18.13%,
    #f71735 120.14%
  );
  border-image-slice: 1;
  text-transform: uppercase;
`

const CancelImageButton = styled(AvatarButton)`
  width: 95px;
  height: 30px;
  background: linear-gradient(266.89deg, #982649 -18.13%, #f71735 120.14%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border: 1px ${(props) => props.theme.colors.ruby} solid;
`

const SaveImageButton = styled(AvatarButton)`
  width: 95px;
  height: 30px;
`

const SliderEntry = styled(Column)``

const ImageInputContainer = styled.label`
  width: 196px;
  height: 40px;
  border-radius: 5px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 40px;
  letter-spacing: 0.1em;
  background: linear-gradient(266.89deg, #982649 -18.13%, #f71735 120.14%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border: 1px ${(props) => props.theme.colors.ruby} solid;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.4s ease;
  text-align: center;
`

const ImageInput = styled.input`
  display: none;
`

const ButtonsRow = styled(Row)`
  width: 200px;
  justify-content: space-between;
  margin-bottom: 10px;
`

const Slider = styled.input`
  -webkit-appearance: none;
  &::-webkit-slider-runnable-track {
    background-image: linear-gradient(
      266.89deg,
      #982649 -18.13%,
      #f71735 120.14%
    );
    border-radius: 5px;
    height: 10px;
  }

  &::-webkit-slider-thumb {
    position: relative;
    appearance: none;
    height: 25px;
    width: 25px;
    background: white;
    top: 50%;
    transform: translateY(-50%);
    border: 5px solid #0000;
    border-radius: 50%;
    background: linear-gradient(white, white) padding-box,
    linear-gradient(
      266.89deg,
      #982649 -18.13%,
      #f71735 120.14%
    ); border-box;
  }
`

export default function ProfileTop() {
  const [selected, setSelected] = useState('Home')
  const { user, userAvatar, token } = useContext(AuthenticationContext)
  const friends = useFriends(user)
  const stats = useStats(user)
  const { invites, avatars } = useFriendInvites(user?.id, token)
  var editor = ''
  const [tempAvatar, setTempAvatar] = useState(userAvatar)
  const [picture, setPicture] = useState({
    cropperOpen: false,
    img: null,
    zoom: 1,
    croppedImg: null
  })

  const handleSlider = (e) => {
    setPicture({
      ...picture,
      zoom: e.target.value
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

      setTempAvatar(picture.img)
      setPicture({
        ...picture,
        cropperOpen: false,
        croppedImg: croppedImg
      })
    }
  }

  const handleFileChange = (e) => {
    if (e.target.files.length !== 0) {
      const url = URL.createObjectURL(e.target.files[0])
      setTempAvatar(url)
      setPicture({
        ...picture,
        img: url,
        zoom: 1
      })
    }
  }

  const handleEditMode = () => {
    setPicture({
      ...picture,
      cropperOpen: !picture.cropperOpen,
      img: tempAvatar ? tempAvatar : userAvatar,
      zoom: 1
    })
  }

  return (
    <Column>
      <Wrapper>
        <ProfilePanel>
          <ProfileData>
            {userAvatar && user && !picture.cropperOpen ? (
              <AvatarContainer>
                <Avatar
                  src={picture?.croppedImg ? picture?.croppedImg : userAvatar}
                  width={220}
                  height={220}
                />
              </AvatarContainer>
            ) : (
              <EditAvatarRow display="block">
                <AvatarEditor
                  ref={setEditorRef}
                  image={picture.img}
                  width={220}
                  height={220}
                  border={3}
                  borderRadius={150}
                  color={[243, 243, 244, 1]} // RGBA
                  rotate={0}
                  scale={picture.zoom}
                />
              </EditAvatarRow>
            )}
            <ProfileInfo>
              <Name>{user?.username || user?.email}</Name>
              <Joined>UK Member since 16 August 2001</Joined>
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
            <ShareProfileButton>
              <ShareButton />
            </ShareProfileButton>
          </ProfileButtons>
        </ProfilePanel>
        <EditAvatarColumn
          initial={false}
          animate={{ marginTop: !picture.cropperOpen ? -200 : 30 }}
          transition={{
            ease: 'easeOut',
            duration: 0.25
          }}
        >
          <SliderEntry>
            <SliderText>Drag and resize</SliderText>
            <Slider
              type={'range'}
              onChange={handleSlider}
              value={picture.zoom}
              min={1}
              max={5}
              step={0.1}
            />
          </SliderEntry>
          <EditAvatarButtons>
            <ButtonsRow>
              <CancelImageButton variant="contained" onClick={handleCancel}>
                Cancel
              </CancelImageButton>
              <SaveImageButton onClick={handleSave}>Save</SaveImageButton>
            </ButtonsRow>
            <ImageInputContainer>
              <ImageInput
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />{' '}
              Choose picture
            </ImageInputContainer>
          </EditAvatarButtons>
        </EditAvatarColumn>
        <ButtonWrapper>
          <ButtonHome
            style={{ borderBottom: `${selected == 'Home' ? 4 : 0}px solid` }}
            onClick={() => setSelected('Home')}
          >
            home
          </ButtonHome>
          <Button
            style={{ borderBottom: `${selected == 'History' ? 4 : 0}px solid` }}
            onClick={() => setSelected('History')}
          >
            event history
          </Button>
          <Button
            style={{ borderBottom: `${selected == 'Teams' ? 4 : 0}px solid` }}
            onClick={() => setSelected('Teams')}
          >
            Teams
          </Button>
          <Button
            style={{ borderBottom: `${selected == 'Friends' ? 4 : 0}px solid` }}
            onClick={() => setSelected('Friends')}
          >
            friends
          </Button>
        </ButtonWrapper>
      </Wrapper>
      {selected == 'Friends' && (
        <Friends friends={friends} invites={invites} avatars={avatars} />
      )}
      {selected == 'Teams' && <Teams />}
      {selected == 'Home' && <Home />}
      {selected == 'History' && <EventHistory />}
    </Column>
  )
}
