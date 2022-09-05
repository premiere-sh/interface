import styled from 'styled-components'
import { Column } from './common'
import { Grid } from 'styled-css-grid'
import { connectHits } from 'react-instantsearch-dom'
import { useRouter } from 'next/router'
import { useUser, useFirestore, useFirestoreCollectionData } from 'reactfire'
import { collection } from 'firebase/firestore'
import _ from 'underscore'

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
  width: 210px;
  margin-left: 30px;
`

export const Hits = connectHits(({ hits }) => {
  const router = useRouter()
  const { data: user } = useUser()
  const firestore = useFirestore()
  const friendsCollection = collection(firestore, `users/${user.uid}/friends`)
  const { data: friends } = useFirestoreCollectionData(friendsCollection)
  const friendsPluck = _.pluck(friends, 'uid')

  const items = hits.map((hit, idx) =>
    hit.uid != user.uid && friendsPluck.includes(hit.uid) ? (
      <Wrapper key={idx}>
        <UserColumn style={{ alignItems: 'center' }}>
          <div onClick={() => router.push(`/profile/${hit.username}`)}>
            <Avatar src={'/devonhenry_.svg'} />
          </div>
          <Username>{hit.email}</Username>
        </UserColumn>
      </Wrapper>
    ) : null
  )
  return (
    <Grid columns={'repeat(auto-fit, minmax(210px, 1fr))'} gap={'83px'}>
      {items}
    </Grid>
  )
})
