import styled from 'styled-components'

const LogoHeader = styled.div`
  font-family: Inter;
  font-style: italic;
  font-weight: 800;
  font-size: 24px;
  line-height: 150%;
  letter-spacing: 0.2em;
  color: ${theme => theme.black};
`

export default function() {
  return <LogoHeader>PREMIERE</LogoHeader>
}

