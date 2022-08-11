import styled from 'styled-components'
import { Column, Container, Row, Center } from './common'
import { Button } from 'components/Buttons'
import { Grid } from 'styled-css-grid'
import { connectHits } from 'react-instantsearch-dom'
import { useRouter } from 'next/router'

const UserColumn = styled(Column)``

const Username = styled.div`
  font-size: 20px;
  line-height: 24px;
  font-weight: 500;
  margin-top: 26.73px;
`

const Avatar = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 170px;
`

const Wrapper = styled.div`
  position: relative;
`

export const Hits = connectHits(({ hits }) => {
  const router = useRouter()

  const items = hits.map((hit, idx) => (
    <Wrapper key={idx}>
      <UserColumn style={{ alignItems: 'center' }}>
        <div onClick={() => router.push(`/profile/${hit.username}`)}>
          <Avatar src={'/devonhenry_.svg'} />
        </div>
        <Username>{hit.usernanme}</Username>
      </UserColumn>
    </Wrapper>
  ))
  return (
    <Grid columns={'repeat(auto-fit, minmax(210px, 1fr))'} gap={'83px'}>
      {items}
    </Grid>
  )
})
