import React from 'react'
import styled from 'styled-components'
import List from './List'

function TodoList({ items, setItems, handleChange, handleDelete}) {
  return (
    <ToDoListItems>
        {items.length ? 
        <ul>
            {items.map(item => {
                return <li key={item.id}>
                    <List  
                        item = {item}
                        setItems = {setItems}
                        handleChange = {handleChange}
                        handleDelete = {handleDelete}
                    />
                </li>
            })}
        </ul> : 
        <p>List is Empty</p>}
    </ToDoListItems>
  )
}

export default TodoList

const ToDoListItems = styled.div`
    li{
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
        list-style: none;
        background-color: #6be0e7;

        &:nth-child(even){
            background-color: #e4eeef;
        }
    }

    p{
        margin-top: 100px;
        text-align: center;
        font-size: 1.5rem;
        font-weight: 600;
    }
`