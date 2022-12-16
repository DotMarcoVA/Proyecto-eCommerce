import React from 'react'
import { Button, Form, InputGroup, FloatingLabel } from 'react-bootstrap'
import './addProduct.css'
import MainNavbar from '../../components/MainNavbar.jsx/MainNavbar'
import useForm from '../../hooks/useForm'
import { postProductService } from '../../services/userServices'

const AddProduct = () => {
  const sendData = async (data) => {
    try {
      const response = await postProductService(data)
      if (response.status === 200) {
        console.log(response)
      }
    } catch (error) {
      console.log('Error: ', error)
    }
  }

  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    isActive: true,
    product_name: '',
    description: '',
    price: 0,
    category: '',
    brand: '',
    sku: '',
    image: ''

  })

  return (
    <div>
      <MainNavbar />
      <Form className='postProduct' onSubmit={handleSubmit}>
        {/* controlId es el id del label y el input */}
        <Form.Group className='mb-3' controlId='first_name'>
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type='text'
            name='product_name'
            value={input.product_name}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='sku'>
          <Form.Label>Sku</Form.Label>
          <Form.Control
            type='text'
            name='sku'
            value={input.sku}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='img'>
          <Form.Label>Image Link</Form.Label>
          <Form.Control
            type='text'
            name='image'
            value={input.image}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Label>Category</Form.Label>
        <Form.Select
          aria-label='Default select example'
          name='category'
          value={input.category}
          onChange={handleInputChange}
        >
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

        <Form.Group className='mb-3' controlId='brand'>
          <Form.Label>Brand</Form.Label>
          <Form.Control
            type='text'
            name='brand'
            value={input.brand}
            onChange={handleInputChange}
          />
        </Form.Group>

        <InputGroup className='mb-3'>
          <InputGroup.Text>$</InputGroup.Text>
          <Form.Control
            placeholder='Precio' name='price' value={input.price}
            onChange={handleInputChange}
          />
          <InputGroup.Text>.00</InputGroup.Text>
        </InputGroup>

        <FloatingLabel controlId='floatingTextarea2' label='Description'>
          <Form.Control
            as='textarea'
            placeholder='Leave a description here'
            style={{ height: '100px' }}
            name='description'
            value={input.description}
            onChange={handleInputChange}
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
