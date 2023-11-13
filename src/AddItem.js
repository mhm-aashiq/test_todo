import React, { useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const AddItem = ({handleSubmit,newItem,setNewItem}) => {
  const inputRef = useRef()

  return (
    <form onSubmit={handleSubmit}>
      <Form.Group className="mb-3 mt-3"  controlId="formBasicEmail">
        {/* <Form.Label>Add Item</Form.Label> */}
        <Form.Control 
        ref = {inputRef}
        autoFocus 
        type='text' 
        required 
        placeholder="Add Item..."
        value = {newItem}
        onChange = {(e) => setNewItem(e.target.value)}
        className='bg-info text-white'
        />
      </Form.Group>
      <div className="text-end">
      <Button 
      variant="primary" 
      className='btn btn-sm pull-right' 
      onClick={()=>inputRef.current.focus()}
      type="submit">
        Submit 
     
      </Button>
      </div>
    </form>
  )
}

export default AddItem



