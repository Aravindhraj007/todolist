import React from 'react'
import styled from 'styled-components'
import { BsFillPlusCircleFill } from 'react-icons/bs'
function AddBar({addItem, setAddItem, handleAppEvent}) {
  return (
    <AddEvent
      onSubmit={handleAppEvent}
    >
      <AddMenuBar 
        type='text'
        placeholder='Add item here'
        value={addItem}
        onChange={(e)=>setAddItem(e.target.value)}
        required
      />
      <button>
        <AddIcon />
      </button>
    </AddEvent>
  )
}

export default AddBar

const AddEvent = styled.form`
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
const AddMenuBar = styled.input`
  font-size: 1.2rem;
  padding: 4px;
  border: none;
  &:focus{
    border: transparent;
    outline: transparent;
  }
`

const AddIcon = styled(BsFillPlusCircleFill)`
  font-size: 2rem;
  color: #449397;
`