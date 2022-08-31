import styled from 'styled-components'
import { Row, Column } from './common'
import { Heading, Input } from './Forms'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { LoginButton } from 'components/Buttons'
import { useForm } from 'react-hook-form'
import { editTeam } from '../firebase/teams'
import {
  useUser,
  useFirestore,
  useFirestoreCollectionData,
  useFirestoreDocData
} from 'reactfire'
import { collection, doc } from 'firebase/firestore'
import _ from 'underscore'

interface FormValues {
  name: string
  description: string
  members: Array<object>
}

const EditColumn = styled.form`
  display: flex;
  flex-direction: column;
  width: 541px;
  margin: auto;
`

const EditYourTeam = styled(Heading)`
  margin-bottom: 81px;
`

const Wrapper = styled(Column)`
  margin-bottom: 56px;
`

const InputName = styled.textarea`
  height: 60px;
  padding-top: 0;
  width: 589px;
  background: #ffffff;
  border: 1px solid #eaeaea;
  box-sizing: border-box;
  border-radius: 5px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140.62%;
  color: ${(props) => props.theme.colors.black};
  padding-left: 25px;
  resize: none;
  padding-top: 16px;
  padding-left: 27px;
  ::placeholder {
    opacity: 0.3;
  }
`

const InputDescription = styled.textarea`
  height: 249px;
  padding-top: 0;
  width: 589px;
  background: #ffffff;
  border: 1px solid #eaeaea;
  box-sizing: border-box;
  border-radius: 5px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140.62%;
  color: ${(props) => props.theme.colors.black};
  padding-left: 25px;
  resize: none;
  padding-top: 16px;
  padding-left: 27px;
  ::placeholder {
    opacity: 0.3;
  }
`

const SubHeading = styled.div`
  margin-bottom: 31px;
  line-height: 31px;
  font-size: 26px;
  font-weight: 600;
`

const Members = styled(Row)`
  margin-bottom: 31px;
`

const MembersRow = styled(Row)`
  margin-right: 3px;
`

export const AddMember = styled.div`
  width: 86px;
  height: 86px;
  border-radius: 50%;
  border: 2px solid #982649;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 34px;
    bottom: 34px;
    width: 2px;
    transform: translateX(-50%);
    background: #982649;
  }
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 34px;
    right: 34px;
    height: 2px;
    transform: translateY(-50%);
    background: #982649;
  }
  &:hover {
    opacity: 0.7;
  }
`

const RemoveMember = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid #982649;
  position: relative;
  transform: translateX(-100%) translateY(-31px) rotate(45deg);
  background: ${(props) => props.theme.colors.white};
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 6px;
    bottom: 6px;
    width: 1px;
    transform: translateX(-50%);
    background: #982649;
  }
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 6px;
    right: 6px;
    height: 1px;
    transform: translateY(-50%);
    background: #982649;
  }
`
const DiscardButton = styled(LoginButton)`
  width: 221px;
  background: linear-gradient(266.89deg, #982649 -18.13%, #f71735 120.14%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border: 1px ${(props) => props.theme.colors.ruby} solid;
`

const SaveButton = styled(LoginButton)`
  width: 192px;
`

const ButtonWrapper = styled.div`
  display: flex;
  flex-align: row;
  justify-content: space-around;
`
const SearchInput = styled(InputName)`
  margin-bottom: 1rem;
  border: none;
  width: 100%;
`
const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border: 1px solid #eaeaea;
`
const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Friend = styled.div``

interface EditedTeamData {
  name: string
  description: string
}

export default function _EditTeam() {
  const [isOpen, setIsOpen] = useState(false)
  const [teammates, setTeammates] = useState([])
  const [inputText, setInputText] = useState('')
  const router = useRouter()
  const { teamId: teamId } = router.query
  console.log('gsdfgdsfgfds', teamId)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>()
  const firestore = useFirestore()
  const { data: user } = useUser()
  const friendsCollection = collection(firestore, `users/${user?.uid}/friends`)
  const teamDoc = doc(firestore, `teams/${teamId}`)
  const membersCollection = collection(firestore, `teams/${teamId}/members`)
  const invitedMembersCollection = collection(
    firestore,
    `teams/${teamId}/invitedMembers`
  )
  const { data: friends } = useFirestoreCollectionData(friendsCollection)
  const { data: team } = useFirestoreDocData(teamDoc)
  const { data: members } = useFirestoreCollectionData(membersCollection)
  const { data: invitedMembers } = useFirestoreCollectionData(
    invitedMembersCollection
  )
  const membersPluck = _.pluck(members, 'uid')
  const invitedMembersPluck = _.pluck(invitedMembers, 'uid')

  const onSubmit = async (data: EditedTeamData) => {
    await editTeam(teamId as string, data.name, data.description, teammates)
    router.push('/profile')
  }

  return (
    <EditColumn onSubmit={handleSubmit(onSubmit)}>
      <EditYourTeam>edit {team?.name}</EditYourTeam>
      <Wrapper>
        <SubHeading>Team Name</SubHeading>
        <InputName
          value={team?.name}
          required={true}
          {...register('name')}
          placeholder={'Enter your team name'}
        />
      </Wrapper>
      <Wrapper>
        <SubHeading>Team Description</SubHeading>
        <InputDescription
          value={team?.description}
          required={true}
          {...register('description')}
          placeholder={'Enter your team description'}
        />
      </Wrapper>
      <Wrapper>
        <SubHeading>Team Members</SubHeading>
        <Members>
          {teammates?.length &&
            teammates.map((teammate, key) => (
              <MembersRow key={key}>
                <Image
                  src={`/${teammate.user}.svg`}
                  width={90}
                  height={90}
                  alt={'teammate-image'}
                />
                <RemoveMember
                  onClick={() => {
                    setTeammates(teammates.filter((e) => e !== teammate))
                  }}
                />
              </MembersRow>
            ))}
          <AddMember
            onClick={() => {
              setIsOpen(true)
            }}
          />
        </Members>
        {isOpen && (
          <SearchWrapper>
            <SearchInput
              onChange={(event) => {
                var lowerCase = event.target.value.toLowerCase()
                setInputText(lowerCase)
              }}
              placeholder={'Search'}
            />
            <SearchContainer>
              {friends?.length &&
                friends.map(
                  (friend, key) =>
                    !teammates.includes(friend) &&
                    !membersPluck.includes(friend.uid) &&
                    !invitedMembersPluck.includes(friend.uid) && (
                      <Friend
                        key={key}
                        onClick={() => {
                          setTeammates((current) => [...current, friend])
                        }}
                      >
                        {friend.email}
                      </Friend>
                    )
                )}
            </SearchContainer>
          </SearchWrapper>
        )}
      </Wrapper>
      <ButtonWrapper>
        <DiscardButton text={'Discard Changes'} disabled={false} />
        <SaveButton type="submit" text={'Save Changes'} disabled={false} />
      </ButtonWrapper>
    </EditColumn>
  )
}
