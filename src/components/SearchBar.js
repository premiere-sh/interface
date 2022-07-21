import { useState } from 'react'
import styled from 'styled-components'

const SearchBarCont = styled.div`
    height: 40px;
    background: linear-gradient(266.89deg, #982649 -18.13%, #f71735 120.14%);
    position: absolute;
    width: 100%;
    top: 90px;
    display: flex;
    justify-content: center;
`

const SearchInput = styled.input`
    width: 80%;
    font-family: Inter;
    font-weight: 100;
    font-size: 14px;
    padding: 10px;
    letter-spacing: 0.2em;
    color: white;
    text-transform: uppercase;
    background: transparent;
        border: none;
    ::placeholder{
        color:white;
    }
    :focus { 
        outline: none !important;
        border-color: #719ECE;
        box-shadow: 0 0 10px #719ECE;
`


export default function SearchBar() {

    const [searchTerm, setSearchTerm] = useState('')

    const handleSubmitSearch = e => {
        //connect to backend 
        alert('seaching for ' + e.target.value)
        setSearchTerm('')
    }

  return (
    <SearchBarCont>
        <SearchInput 
                name='main-search' 
                type='text' 
                value={searchTerm} 
                onChange={e => 
                    setSearchTerm(e.target.value)     
                } 
                onKeyPress={e => {
                    if(e.key==='Enter'){
                        handleSubmitSearch(e)
                    }
                }}
                placeholder={'Search our platform...'}
                autoComplete="off" 
            /> 
    </SearchBarCont>
  )
}