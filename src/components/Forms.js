import styled from 'styled-components'
import { GradientText } from 'components/common'

export const Entry = styled.div`
  height: 130px;
  margin: auto;
`

export const Input = styled.input`
  width: 589px;
  height: 60px;
  background: #ffffff;
  border: 1px solid #eaeaea;
  box-sizing: border-box;
  border-radius: 5px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140.62%;
  color: ${props => props.theme.colors.black};
  padding-left: 25px;
`

export const SmallInput = styled(Input)`
  width: 260px;
`

export const Caption = styled(GradientText)`
  text-transform: uppercase;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 15px;
`

export const Heading = styled.div`
  font-family: Inter;
  font-style: italic;
  font-weight: bold;
  font-size: 48px;
  line-height: 58px;
  text-align: center;
  color: ${props => props.theme.colors.black};
  text-transform: uppercase;
  margin-bottom: 30px;
`

export const Subtext = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140.62%;
  text-align: center;
  color: ${props => props.theme.colors.black};
  margin-bottom: 70px;
`
