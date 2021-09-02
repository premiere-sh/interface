import styled from 'styled-components'

export const Column = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const Row = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const GradientText = styled.div`
  background: linear-gradient(266.89deg, #982649 -18.13%, #F71735 120.14%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const Subheading = styled.div`
  font-family: Inter;
  font-style: italic;
  font-weight: 600;
  font-size: 48px;
  line-height: 150%;
  letter-spacing: 0.055em;
  color: ${props => props.theme.colors.black};
  margin-bottom: 80px;
`

export const Container = styled.div`
  width: min(80%, 1400px);
  margin: auto;
`

export const Circle = styled.div`
  width: 42px;
  height: 42px;
  background: #ffffff;
  border-radius: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
`
