import styled from 'styled-components'
import { Center, Column, Row } from './common'

const Button = styled.button`
  --gradient: linear-gradient(266.89deg, #982649 -18.13%, #F71735 120.14%);
  background: var(--gradient);
  border-radius: 5px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.1em;
  color: ${props => props.theme.colors.white};
  border: 0;
  &:hover {
    background: linear-gradient(266.89deg, #982649 -18.13%, #F71735 120.14%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    border: 1px ${props => props.theme.colors.ruby} solid;
  }
  text-transform: uppercase;
  cursor: pointer;
  margin-bottom: 49px;
  margin-left: 16px;
  margin-Right: 16px;
  width: 192px;
`

const Cancel = styled(Button)`
background: linear-gradient(266.89deg, #982649 -18.13%, #F71735 120.14%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
border: 1px ${props => props.theme.colors.ruby} solid;
width: 178px;
`

const Box = styled(Column)`
  align-items: center;
  max-width: 674px;
  height: 205px;
  margin: auto;
  border-radius: 15px;
  box-shadow: 0px 8px 50px 2px #00000040;
`

const Question = styled.div`
  font-size: 26px;
  line-height: 31.5px;
  font-weight: 600;
  color: #0C0A09;
  margin-top: 54px;
  margin-bottom: 41px;
`

const SpaceBetween = styled(Row)`
justify-content: Center;
`

export default function DeleteTeam() {
  return (
    <Box>
      <Column>
      <Question>Are you sure you want to delete this team?</Question>
      <SpaceBetween>
        <Cancel>no, cancel</Cancel>
        <Button>yes, delete it</Button>
      </SpaceBetween>
      </Column>
    </Box>
  )
}
//todo Button <Cancel></Cancel> has to close window.
//todo: window should pop centered