import styled from 'styled-components'

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

export function SignupButton() {
  return (
    <Signup>
      sign up
    </Signup>
  )
}

export function SignupButtonLarge() {
  return (
    <SignupLarge>
      sign up
    </SignupLarge>
  )
}

export function DashboardButton() {
  return (
    <Dashboard>
      dashboard
    </Dashboard>
  )
}

export function LoginButton() {
  return (
    <Login>
      log in
    </Login>
  )
}
