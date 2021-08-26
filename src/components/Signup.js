import styled from 'styled-components'

const Button = styled.button`
  background: linear-gradient(266.89deg, #982649 -18.13%, #F71735 120.14%);
  border-radius: 5px;
  width: 129px;
  height: 36px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.1em;
  color: ${props => props.theme.colors.white};
  border: 0;
`

export default function SignupButton() {
  return (
    <Button>
      SIGN UP
    </Button>
  )
}
