import styled from 'styled-components'
import { Row, Column } from './common'
import { Heading, Input } from './Forms'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useContext, useState } from 'react'
import TeamContext from '../contexts/teamsContext'
import { Button } from 'components/Buttons'

const EditColumn = styled(Column)`
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
const MyButton = styled(Button)`
  height: 36px;
`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
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
const SearchElement = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
  margin-left: 27px;
  margin-right: 27px;
  &:hover {
    background: lightgray;
    cursor: pointer;
  }
`

function List(props) {
  const teamCtx = useContext(TeamContext)

  //create a new array by filtering the original array
  const filteredData = teamCtx.allTeammates.filter((el) => {
    //if no input the return the original
    if (props.input === '') {
      return el
    }
    //return the item which contains the user input
    else {
      return el.user.toLowerCase().includes(props.input)
    }
  })
  return (
    <SearchContainer>
      {filteredData.map((item, index) => (
        <SearchElement
          onClick={() => {
            props.onClickHandler(item)
          }}
          key={index}
        >
          {item.user}: {item.id}
        </SearchElement>
      ))}
      <SearchElement onClick={props.onClose}>Cancel</SearchElement>
    </SearchContainer>
  )
}

export default function _TeamEdit() {
  const [isOpen, setIsOpen] = useState(false)
  const [teammates, setTeammates] = useState([])
  const [inputText, setInputText] = useState('')
  const router = useRouter()
  const dataId = Number(router.query.id)
  const teamCtx = useContext(TeamContext)

  useEffect(() => {
    if (dataId) {
      const findTeam = teamCtx.teamsUpdated.findIndex(
        (team) => team.id == dataId
      )
      setTeammates(teamCtx.teamsUpdated[findTeam].teammates)
    } else {
      setTeammates([])
    }
  }, [teamCtx.teamsUpdated])
  return (
    <EditColumn>
      <EditYourTeam>edit your team</EditYourTeam>
      <Wrapper>
        <SubHeading>Team Name</SubHeading>
        <InputName
          onChange={(event) => {
            teamCtx.onChangeName(dataId, event.target.value)
          }}
          placeholder={'Enter your team name'}
        />
      </Wrapper>
      <Wrapper>
        <SubHeading>Team Description</SubHeading>
        <InputDescription
          onChange={(event) => {
            teamCtx.onChangeDis(dataId, event.target.value)
          }}
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
                    teamCtx.removeMember(dataId, teammate.id)
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
            <List
              onClickHandler={(memberTeammate) => {
                teamCtx.addMember(dataId, memberTeammate)
                setIsOpen(false)
              }}
              onClose={() => {
                setIsOpen(false)
              }}
              input={inputText}
            />
          </SearchWrapper>
        )}
      </Wrapper>
      <ButtonWrapper>
        <MyButton
          onClick={() => {
            teamCtx.discardChanges()
            router.push('profile')
          }}
        >
          Discard Changes
        </MyButton>
        <MyButton
          onClick={() => {
            teamCtx.saveChanges()
            router.push('profile')
          }}
        >
          Save Changes
        </MyButton>
      </ButtonWrapper>
    </EditColumn>
  )
}
