import React from 'react'
import styled from 'styled-components'

function Footer({ length }) {
  return (
    <FooterElement>
        {length===1 ? 
        <h2>' {length} ' item in list</h2> :
        <h2>' {length} ' items in list</h2>}
    </FooterElement>
  )
}

export default Footer

const FooterElement = styled.footer`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #449397;
    color: white;
    letter-spacing: 2.2px;
`