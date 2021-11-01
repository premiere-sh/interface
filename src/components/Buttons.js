import styled from 'styled-components'
import { GradientText } from 'components/common'
import Image from 'next/image'
import Link from 'next/link'

export const Button = styled.button`
  --gradient: linear-gradient(266.89deg, #982649 -18.13%, #f71735 120.14%);
  background: var(--gradient);
  border-radius: 5px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.1em;
  color: ${(props) => props.theme.colors.white};
  border: 0;
  &:hover {
    background: linear-gradient(266.89deg, #982649 -18.13%, #f71735 120.14%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    border: 1px ${(props) => props.theme.colors.ruby} solid;
  }
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.4s ease;
`

const Signup = styled(Button)`
  width: 129px;
  height: 36px;
`

const Dashboard = styled(Button)`
  width: 171px;
  height: 36px;
`

const Login = styled(Button)`
  width: 589px;
  height: 60px;
`

const SignupLarge = styled(Button)`
  width: 589px;
  height: 60px;
`

const ViewTournaments = styled(Button)`
  width: 252px;
  height: 36px;
`

const ArrowButtonContainer = styled(GradientText)`
  height: 30px;
  display: flex;
  text-transform: uppercase;
  flex-direction: row;
  cursor: pointer;
  user-select: none;
`

export function SignupButton() {
  return <Signup>sign up</Signup>
}

export function SignupButtonLarge() {
  return <SignupLarge>sign up</SignupLarge>
}

export function DashboardButton() {
  return <Dashboard>dashboard</Dashboard>
}

export function LoginButton() {
  return <Login>log in</Login>
}

export function ViewTournamentsButton() {
  return (
    <Link href={'/tournaments'}>
      <a>
        <ViewTournaments>
          view tournaments
        </ViewTournaments>
      </a>
    </Link>
  )
}

export function ArrowButton({ text }) {
  return (
    <ArrowButtonContainer>
      {text}
      <div style={{ marginBottom: 10, marginLeft: 15 }}>
        <Image
          src={'/arrow-right-gradient.svg'}
          width={18}
          height={12}
          alt={'arrow-right'}
        />
      </div>
    </ArrowButtonContainer>
  )
}
