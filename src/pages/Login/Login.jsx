import React from 'react'
import { useNavigate } from 'react-router-dom'
import { loginUserService } from '../../services/userServices'
import { Button, Form } from 'react-bootstrap'
import useForm from '../../hooks/useForm'

const Login = () => {
  const navigate = useNavigate()

  const sendData = async (data) => {
    try {
      const response = await loginUserService(data)
      if (response.status === 200) {
        const token = response.data.token
        window.localStorage.setItem('token', token)
        navigate('/')

        console.log(response)
      }
    } catch (error) {
      console.log('Error: ', error)
    }
  }

  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    email: '',
    password: ''
  })

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className='mb-3' controlId='email'>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type='email'
          placeholder='Enter email'
          value={input.email}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId='password'>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type='password'
          placeholder='Password'
          value={input.password}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicCheckbox'>
        <Form.Check type='checkbox' label='Check me out' />
      </Form.Group>

      <Button variant='primary' type='submit'>
        Log In
      </Button>
    </Form>
  )
}

export default Login
