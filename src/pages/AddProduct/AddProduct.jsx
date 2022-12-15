import React from 'react'
import { Button, Form, InputGroup, FloatingLabel } from 'react-bootstrap'
import './addProduct.css'

const AddProduct = () => {
  return (
    <div>
      <Form className='postProduct'>
        {/* controlId es el id del label y el input */}
        <Form.Group className='mb-3' controlId='first_name'>
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type='text'
            id='product_name'
            name='product_name'
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='first_name'>
          <Form.Label>Sku</Form.Label>
          <Form.Control
            type='text'
            id='sku'
            name='sku'
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='first_name'>
          <Form.Label>Image Link</Form.Label>
          <Form.Control
            type='text'
            id='img'
            name='img'
          />
        </Form.Group>

        <Form.Label>Category</Form.Label>
        <Form.Select aria-label='Default select example'>
          <option>Select a category</option>
          <option value='1'>Books</option>
          <option value='2'>Movies</option>
          <option value='3'>Music</option>
          <option value='4'>Electronics</option>
          <option value='5'>Computers</option>
          <option value='6'>Home</option>
          <option value='7'>Garden</option>
          <option value='8'>Tools</option>
          <option value='9'>Grocery</option>
          <option value='10'>Health</option>
          <option value='11'>Beauty</option>
          <option value='12'>Toys</option>
          <option value='13'>Kids</option>
          <option value='14'>Baby</option>
          <option value='15'>Clothing</option>
          <option value='16'>Shoes</option>
          <option value='17'>Jewelry</option>
          <option value='18'>Sports</option>
          <option value='19'>Outdoors</option>
          <option value='20'>Automotive</option>
          <option value='21'>Industrial</option>
        </Form.Select>

        <Form.Group className='mb-3' controlId='first_name'>
          <Form.Label>Brand</Form.Label>
          <Form.Control
            type='text'
            id='brand'
            name='brand'
          />
        </Form.Group>

        <InputGroup className='mb-3'>
          <InputGroup.Text>$</InputGroup.Text>
          <Form.Control placeholder='Precio' />
          <InputGroup.Text>.00</InputGroup.Text>
        </InputGroup>

        <FloatingLabel controlId='floatingTextarea2' label='Description'>
          <Form.Control
            as='textarea'
            placeholder='Leave a description here'
            style={{ height: '100px' }}
          />
        </FloatingLabel>

        <Button variant='primary' type='submit'>
          Post Product
        </Button>
      </Form>
    </div>
  )
}

export default AddProduct
