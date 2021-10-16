import styled from 'styled-components'
import { Column, Container, Row } from './common'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { useState } from 'react'

const Teams = dynamic(() => import('../components/Teams'))

const SpaceBetween = styled(Row)`
  justify-content: space-between;
`
const SpaceAround = styled(Row)`
  justify-content: space-around;
`


const Name = styled.div`
  font-size: 36px;
  line-height: 36px;
  font-style: italic;
  font-weight: 700;
`

const Since = styled.div`
  font-family: Inter;
  font-style: Normal;
  font-weight: 600;
  font-size: 18px;
  fine-height: 27px;
  color: ${props => props.theme.colors.gray};
`

const GreyText = styled.div`
  font-style: Regular;
  font-size: 16px;
  fine-height: 24px;
  color: ${props => props.theme.colors.gray};
  letter-spacing: 0.1em;
`

const Numbers = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  margin-top: 6px;
`
const Button = styled.div`
  font-size: 20px;
  font-weight: 500px;
  line-height: 40px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border-bottom: 0px solid;
  border-background: linear-gradient(266.89deg, #982649 -18.13%, #F71735 120.14%);
  padding: 0 23px 23px 23px;
  z-index: 2;
  border-image-source: linear-gradient(266.89deg, #982649 -18.13%, #F71735 120.14%);
  border-image-slice: 1;
  &:hover{
    cursor: pointer;
  }
`

const Line = styled.div`
  height: 1px;
  background: #E3E3E3;
`


export default function ProfileTop() {

  const [showTeams, setShowTeams] = useState(false)

  return (
    <Column>
      <Container>
        <SpaceBetween>
          <Row>
            <div>
              <Image
                src={'/devonhenry_.svg'} 
                width={219} 
                height={219} 
                alt={'Profile-image'} 
              />
            </div>
            <Column style={{ marginLeft: 52 }}>
            <Name style={{ marginBottom: 12 }}>devonhenry_</Name>
            <Since style={{ marginBottom: 40 }}>UK Member since August 24, 2021</Since>
              <Row>
              <Column>
                <GreyText style={{ textTransform: 'uppercase'}}>rank</GreyText>
                <Numbers>1st</Numbers>
                </Column>
                <Column>
                  <GreyText style={{ marginLeft: 52, marginRight: 52, textTransform: 'uppercase' }}>weekly wins</GreyText>
                  <Numbers style={{ marginLeft: 52, marginRight: 52 }}>98</Numbers>
                </Column>
                <Column>
                  <GreyText style={{ textTransform: 'uppercase'}}>$prem earned</GreyText>
                  <Numbers>2310994</Numbers>
                </Column>
              </Row>
            </Column>
          </Row>
          <Column>
            <div style={{ marginBottom: 113}}>
              <Image
                src={'/arrow_right.svg'} 
                width={32} 
                height={32} 
                alt={'Profile-image'} 
              />
            </div>
            <div style={{ marginBottom: 20}}>
              <Image
                src={'/arrow_right.svg'} 
                width={32} 
                height={32} 
                alt={'Profile-image'} 
              />
            </div>
          </Column>
        </SpaceBetween>
        <SpaceBetween style={{ marginTop: 137}}>
          <Button style={{ paddingRight: 23, paddingLeft: 0 }}>home</Button>
          <Button>event history</Button>
          <Button style={{ borderBottom: `${showTeams == true ? 1 : 0} solid` }}onClick={() => showTeams == false ? setShowTeams(true) : setShowTeams(false)}>teams</Button>
          <Button>friends</Button>
          <Button style={{ paddingRight: 0, paddingLeft: 23 }}>uncoming events</Button>
        </SpaceBetween>
        <Line style={{ transform: 'translateY(-1px)' }}/>
        <div style={{ height: 79 }}/>
      </Container>
      {showTeams && <Teams/>}
    </Column>
  )
}