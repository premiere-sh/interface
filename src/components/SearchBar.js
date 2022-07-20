import styled from 'styled-components'
import Image from 'next/image'
import { Row } from 'components/common'

const SearchBarCont = styled.div`
    height: 40px;
    background: linear-gradient(266.89deg, #982649 -18.13%, #f71735 120.14%);
    position: absolute;
    width: 100%;
    top: 90px;
`

const SearchPlaceholderText = styled.div`
font-family: Inter;
font-weight: 100;
font-size: 14px;
padding: 10px;
letter-spacing: 0.2em;
color: white;
text-transform: uppercase;

`


export default function SearchBar() {
  return (
    <SearchBarCont>
        <SearchPlaceholderText>
        Search our platform...
        </SearchPlaceholderText>
  
    </SearchBarCont>
  )
}