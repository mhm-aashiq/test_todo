import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { useEffect, useState } from "react";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";

function App() {

  const [newItem,setNewItem] = useState('')
  const [search,setSearch] = useState('')
  
  const [items,setItems] = useState(JSON.parse(localStorage.getItem('todo_list')) || [])

      const addItem = (item) => {
        const id = items.length ? items[items.length - 1].id + 1 : 1;
        const addNewItem = {id,checked:false,item}
        const listItems = [...items,addNewItem]
        setItems(listItems)
        localStorage.setItem("todo_list",JSON.stringify(listItems))
      }




      const handleCheck = (id) =>{
        const listItems = items.map((item)=>
        item.id === id? {...item, checked: !item.checked}: item )
        setItems(listItems)
        localStorage.setItem("todo_list",JSON.stringify(listItems))
      }

      const handleDelete = (id) => {
        const listItems = items.filter((item)=>
        item.id !== id )
        setItems(listItems)
        localStorage.setItem("todo_list",JSON.stringify(listItems))
      }

      const handleSubmit = (e) => {
       e.preventDefault()
       if(!newItem) return;
       addItem(newItem)
       setNewItem('')
      }

  return (
    <div className="container">
      <Header />

      <AddItem 
      handleSubmit = {handleSubmit}
      setNewItem={setNewItem}
      newItem = {newItem}
      />
  <hr />
      <SearchItem
        search = {search}
        setSearch = {setSearch}
       />

      <Content 
      items = {
        items.filter(
          item => ((item.item).toLowerCase().includes(search.toLowerCase()))
          
          )}
      setItems = {setItems}
      handleCheck = {handleCheck}
      handleDelete = {handleDelete}
      />

      <Footer length = {items.length}/>
    </div>
  );
}

export default App;
