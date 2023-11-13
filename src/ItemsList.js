import React from 'react'

import LineItem from './LineItem';

const ItemsList = ({items,setItems,handleDelete,handleCheck}) => {
  return (
<>    <h3 className='text-center text-white bg-dark rounded mb-3'>Your List Items</h3>
    <ul>
      
    {
        items.map(item => (
           <LineItem 
           item = {item}
           key={item.id}
           setItems = {setItems}
           handleCheck = {handleCheck}
           handleDelete = {handleDelete}
           />
        ))
    }
</ul>
</>
  )
}

export default ItemsList