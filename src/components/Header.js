import React from 'react'
import styled from 'styled-components' 

function Header() {
  return (
    <HeaderElement>
        <h1>To Do List</h1>
    </HeaderElement>
  )
}

export default Header

const HeaderElement = styled.header`
    position: fixed;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    letter-spacing: 8px;
    background-color: #449397;
    color: white;
    text-shadow: 7px 4px 10px black;
`