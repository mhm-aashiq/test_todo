import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SearchItem = ({search, setSearch}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Form.Group className="mb-3 mt-3"  controlId="formBasicEmail">
        {/* <Form.Label>Search</Form.Label> */}
        <Form.Control 
        type='text' 
        placeholder="Search..."
        value = {search}
        onChange = {(e) => setSearch(e.target.value)}
        className='bg-secondary text-white'
        />
      </Form.Group>
   
    </form>
  )
}

export default SearchItem