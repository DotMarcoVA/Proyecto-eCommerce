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
          <option value='Books'>Books</option>
          <option value='Movies'>Movies</option>
          <option value='Music'>Music</option>
          <option value='Electronics'>Electronics</option>
          <option value='Computers'>Computers</option>
          <option value='Home'>Home</option>
          <option value='Garden'>Garden</option>
          <option value='Tools'>Tools</option>
          <option value='Grocery'>Grocery</option>
          <option value='Health'>Health</option>
          <option value='Beauty'>Beauty</option>
          <option value='Toys'>Toys</option>
          <option value='Kids'>Kids</option>
          <option value='Baby'>Baby</option>
          <option value='Clothing'>Clothing</option>
          <option value='Shoes'>Shoes</option>
          <option value='Jewelry'>Jewelry</option>
          <option value='Sports'>Sports</option>
          <option value='Outdoors'>Outdoors</option>
          <option value='Automotive'>Automotive</option>
          <option value='Industrial'>Industrial</option>
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
