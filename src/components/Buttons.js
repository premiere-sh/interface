import styled from 'styled-components'
import { GradientText } from 'components/common'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Row as _Row } from 'components/common'


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
  @media screen and (max-width: 736px) {
    margin:auto;
  }
`

const ArrowButtonContainer = styled(GradientText)`
  height: 30px;
  display: flex;
  text-transform: uppercase;
  flex-direction: row;
  cursor: pointer;
  user-select: none;
`

export function SignupButton({ text, disabled }) {
  return <Signup disabled={disabled}>{text}</Signup>
}

export function SignupButtonLarge({ ...props }) {
  return <SignupLarge {...props}>sign up</SignupLarge>
}

export function DashboardButton() {
  return <Dashboard>dashboard</Dashboard>
}

export function LoginButton({ text, disabled, ...props }) {
  return (
    <Login disabled={disabled} {...props}>
      {text}
    </Login>
  )
}

export function ViewTournamentsButton() {
  return (
    <Link href={'/tournaments'} >
      <ViewTournaments>view tournaments</ViewTournaments>   
    </Link>
  )
}



export function ShareButton(){
  const [selected, setSelected] = useState(false)
  const SocialsRow = styled(_Row)`
  width: 306px;
  justify-content: space-between;
  padding: 20px;
  border-radius:25px;

  display: ${selected == false ? 'none' :  'flex'};
  position: absolute;
  top: -65px;
`
 const ShareContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  margin-right:20px;
`


 

  return(
    <ShareContainer>
    <SocialsRow>
      <a href='https://discord.com' target='_blank'>
        <Image src={'/dc.svg'} width={34} height={34} alt={'social'} />
      </a>
      <a href='https://www.instagram.com' target='_blank'>
        <Image src={'/ig.svg'} width={34} height={34} alt={'social'} />
      </a>  
      <a href='https://twitter.com/intent/tweet?via=premiere_sh&text=Some%20tweet%20text%20here' target='_blank'>
        <Image src={'/twitter.svg'} width={34} height={34} alt={'social'} />
      </a>
      <a href='https://telegram.org' target='_blank'>
        <Image src={'/tg.svg'} width={34} height={34} alt={'social'} />
      </a>  
      <a href='https://www.youtube.com' target='_blank'>
        <Image src={'/yt.svg'} width={34} height={34} alt={'social'} />
      </a>  
    </SocialsRow> 
    
      <a onClick={() => setSelected(!selected)}>
        <Image
          src={'/share.svg'}
          width={34}
          height={34}
          alt={'arrow-right'}
        />
      </a> 
    </ShareContainer> )
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
