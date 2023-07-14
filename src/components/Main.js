import React from 'react'
import styled from 'styled-components'
import AddBar from './main-tools/AddBar'
import SearchBar from './main-tools/SearchBar'
import TodoList from './main-content/TodoList'

function Main({ items, setItems, handleChange, handleDelete, addItem, setAddItem, handleAppEvent, searchItem, setSearchItem }) {
  return (
    <MainElement>
        <MenuBars>
            <AddBar 
                addItem = {addItem}
                setAddItem = {setAddItem}
                handleAppEvent = {handleAppEvent}
            />
            <SearchBar 
                searchItem = {searchItem}
                setSearchItem = {setSearchItem}
            />
        </MenuBars> 
        <MainContent>
            <TodoList 
                items = {items}
                setItems = {setItems}
                handleChange = {handleChange}
                handleDelete = {handleDelete}
                handleAppEvent = {handleAppEvent}
            />
        </MainContent>
    </MainElement>
  )
}

export default Main

const MainElement = styled.main`
    width: 100%;
    min-height: 100vh;
    padding-top: 70px;
    padding-bottom: 60px;
`
const MenuBars = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin-top: 20px;
`
const MainContent = styled.section`
    margin-top: 20px;
    padding: 0 15%;
`