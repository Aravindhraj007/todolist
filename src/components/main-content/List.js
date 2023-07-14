import React from 'react'
import { BsFillTrashFill } from "react-icons/bs"
import styled from 'styled-components'

function List({ item, setItems, handleChange, handleDelete }) {
  return (
    <EveryItemElement>
      <LeftSide>
        <input
          type='checkBox'
          checked={item.checked}
          onChange={()=>handleChange(item.id)}
        />
        <LabelItem ischecked={item.checked.toString()}>
          {item.item}
        </LabelItem>
      </LeftSide>
      <RightSide>
        <TrashIcon 
          onClick={()=>handleDelete(item.id)}
        />
      </RightSide>
    </EveryItemElement>
  )
}

export default List

const EveryItemElement = styled.div`
  padding: 17px 8% 5px 8%;
  width: 100%;
  font-size: 1.35rem;
  display: flex;
  justify-content: space-between;
  input {
    margin-left: 10px;
    transform: scale(3);
  }
`
const LabelItem = styled.label`
  margin-left: 50px;
  text-decoration: ${props => props.ischecked === 'true' ? 'line-through':'none'};
`
const LeftSide = styled.div``
const RightSide = styled.div``
const TrashIcon = styled(BsFillTrashFill)`
  font-size: 2rem;
  color: blue;
  &:hover{
    color: red;
  }
`
