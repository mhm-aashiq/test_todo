import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

const LineItem = ({item,setItems,handleDelete,handleCheck}) => {
  return (
    <li>
    <input
        type="checkbox"
        checked={item.checked}
        onChange={() => handleCheck(item.id)}
    />

    <label 
    style ={(item.checked) ? {textDecoration:'line-through'} : null}
     onDoubleClick={() => handleCheck(item.id)} 
     className='form-label text-center col-lg-11 col-md-11 col-11 col-sm-11'>
     {item.item}
     </label>
        
    <button className='btn-danger btn btn-sm' onClick={() => handleDelete(item.id)}><FaTrashAlt /></button>
    <hr />
</li>
  )
}

export default LineItem