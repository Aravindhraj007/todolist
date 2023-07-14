import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { useState } from 'react';

function App() {

  // ------------ USE STATE ------------ 
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('to-do-list')) || [])

  const [addItem, setAddItem] = useState('')
  const [searchItem, setSearchItem] = useState('')

  // ------------ HANDLER FUNCTION ------------ 

  const handleChange = (id) => {
    const listener = items.map(item => {
      return item.id === id ? {...item, checked:!item.checked} : item
    })
    setItems(listener)
    localStorage.setItem('to-do-list', JSON.stringify(listener))
  }

  const handleDelete = (id) => {
    const listener = items.filter(item => {
      return item.id !== id
    })
    setItems(listener)
    localStorage.setItem('to-do-list', JSON.stringify(listener))
  }

  const handleAppEvent = (e) => {
    e.preventDefault()
    const id = items.length ? items[items.length-1].id + 1 : 1
    const newItem = {
      id: id,
      item: addItem,
      checked: false,
    }
    setAddItem('')
    const listener = [...items, newItem]
    setItems(listener)
    localStorage.setItem('to-do-list', JSON.stringify(listener))
  }

  return (
    <div className="App">
      <Header />

      <Main 
        items = {items.length ? items.filter(item => {
          return item.item.toLowerCase().includes(searchItem.toLowerCase())
        }) : items}
        setItems = {setItems}
        handleChange = {handleChange}
        handleDelete = {handleDelete}
        addItem = {addItem}
        setAddItem = {setAddItem}
        handleAppEvent = {handleAppEvent}
        searchItem = {searchItem}
        setSearchItem = {setSearchItem}
      />

      <Footer length = {items.length}/>
    </div>
  );
}

export default App;
