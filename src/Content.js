import React, { useState } from 'react'

import ItemsList from './ItemsList';

const Content = ({items,setItems,handleDelete,handleCheck}) => {
  
  return (
    <div className='mt-5 mb-5' >
    
        {(items.length) ? (
            
   <ItemsList
   items = {items}
   setItems = {setItems}
   handleCheck = {handleCheck}
   handleDelete = {handleDelete}
   />
    ) : <h2 className='text-primary text-center'>Your List is Empty... Better add something</h2>}
    </div>
  )
}

export default Content