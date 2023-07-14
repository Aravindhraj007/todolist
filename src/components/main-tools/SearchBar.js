import React from 'react'
import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'

function SearchBar({ searchItem, setSearchItem }) {
  return (
    <SearchEvent onSubmit={(e)=>e.preventDefault()}>
      <SearchMenuBar 
        type='text'
        placeholder='Search item here'
        value={searchItem}
        onChange={(e)=>setSearchItem(e.target.value)}
      />
      <SearchIcon />
    </SearchEvent>
  )
}

export default SearchBar

const SearchEvent = styled.form`
  border: 2px solid #449397;
  padding: 8px 20px 5px 20px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  button{
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`
const SearchMenuBar = styled.input`
  font-size: 1.2rem;
  padding: 4px;
  border: none;
  &:focus{
    border: transparent;
    outline: transparent;
  }
`
const SearchIcon = styled(FaSearch)`
  font-size: 2rem;
  color: #449397;
  cursor: pointer;
`