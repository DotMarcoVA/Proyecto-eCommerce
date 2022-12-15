import React from 'react'
import './MainNavbar.css'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MainNavbar = () => {
  return (
    <Navbar bg='dark' variant='dark' expand='lg' fixed='top'>
      <Container fluid>
        <Navbar.Brand href='#'>
          <img src='./src/assets/cat.png' alt='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='me-auto my-2 my-lg-0'
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to='/addproduct'>
              <Button variant='outline-info'>Add New Product</Button>{' '}
            </Link>
          </Nav>

          <Form className='customer d-flex'>
            <input
              className='shopping-cart'
              type='image' id='image' alt='Login'
              src='./src/assets/cart.png'
            />
            <Form.Control
              type='search'
              placeholder='Search'
              className='me-2'
              aria-label='Search'
            />
            <Button variant='info'>Search</Button>
          </Form>

          <Nav className='count-buttons'>
            <Link to='/login'><Button className='count-buttons'>Log in</Button></Link>
            <Link to='/signup'><Button className='count-buttons'>Sign up</Button></Link>
            <Button className='count-buttons' variant='outline-danger'>Log Out</Button>
          </Nav>
        </Navbar.Collapse>
        <div className='vr' />
      </Container>
    </Navbar>
  )
}

export default MainNavbar
