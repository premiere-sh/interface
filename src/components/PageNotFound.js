import styled from 'styled-components';
import Link from 'next/link';
import { Column } from 'components/common';

const NotFoundContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 618px);
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: ${(props) => props.theme.colors.ruby}
  }
`

const GoBackToHome = styled.div`
  margin-top: 20px;
`

export default function Custom404() {
  return (
    <NotFoundContainer>
      <Column style={{ alignItems: 'center' }}>
        <h1>404 - Page Not Found</h1>
        <GoBackToHome>
          <span style={{ marginRight: 8 }}>Go back to the</span>
          <Link href={'/'}>
            Homepage
          </Link>
        </GoBackToHome>
      </Column>
    </NotFoundContainer>
  )
}
