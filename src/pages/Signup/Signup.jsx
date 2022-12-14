import React from 'react'
import { useNavigate } from 'react-router-dom'
import { registerUserService } from '../../services/userServices'
import { Button, Form } from 'react-bootstrap'
import useForm from '../../hooks/useForm'
import './signup.css'

const Signup = () => {
  const navigate = useNavigate()

  const sendData = async (data) => {
    try {
      const response = await registerUserService(data)
      if (response.status === 200) {
        console.log(response)
        navigate('/login')
      }
    } catch (error) {
      console.log('Error: ', error)
    }
  }

  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    first_name: '',
    last_name: '',
    gender: '',
    email: '',
    password: ''
  })

  return (
    <div>
      <Form className='signForm' onSubmit={handleSubmit}>
        {/* controlId es el id del label y el input */}
        <Form.Group className='mb-3' controlId='first_name'>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter email'
            // id='first_name'
            name='first_name'
            value={input.first_name}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='last_name'>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter email'
            // id='last_name'
            name='last_name'
            value={input.last_name}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Select
          aria-label='Default select example'
          id='gender'
          name='gender'
          value={input.gender}
          onChange={handleInputChange}
        >
          <option>Gender</option>
          <option value='M'>M</option>
          <option value='F'>F</option>
        </Form.Select>

        <Form.Group className='mb-3' controlId='email'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            // id='email'
            name='email'
            value={input.email}
            onChange={handleInputChange}
          />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className='mb-3' controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            // id='password'
            name='password'
            value={input.password}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Sign Up
        </Button>
      </Form>
    </div>
  )
}

export default Signup
