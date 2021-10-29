import styled from 'styled-components'
import { Row, Column } from './common'
import { Heading, Input } from './Forms'
import Image from 'next/image'

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

const Members = styled(Row)``

const MembersRow = styled(Row)`
  margin-right: 3px;
`

const AddMember = styled.div`
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

export default function _TeamEdit() {
  const teammates = [
    {
      user: 'devonhenry_'
    },
    {
      user: 'devonhenry_'
    },
    {
      user: 'devonhenry_'
    }
  ]

  return (
    <EditColumn>
      <EditYourTeam>edit your team</EditYourTeam>
      <Wrapper>
        <SubHeading>Team Name</SubHeading>
        <InputName placeholder={'Enter your team name'} />
      </Wrapper>
      <Wrapper>
        <SubHeading>Team Description</SubHeading>
        <InputDescription placeholder={'Enter your team description'} />
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
                <RemoveMember />
              </MembersRow>
            ))}
          <AddMember />
        </Members>
      </Wrapper>
    </EditColumn>
  )
}
