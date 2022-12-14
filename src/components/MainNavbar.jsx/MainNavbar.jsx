import React from 'react'
import './MainNavbar.css'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'
<<<<<<< HEAD
import { BsFillCartFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
=======
import { Link } from 'react-router-dom'
// import { BsFillCartFill } from 'react-icons/bs'
>>>>>>> e0839473f865f21da01a7e72907377b21dfb8b5a

const MainNavbar = () => {
  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <Container fluid>
        <Navbar.Brand href='#'>Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='me-auto my-2 my-lg-0'
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href='#action1'>Home</Nav.Link>
          </Nav>
          <div className='cart-icon'>
            <BsFillCartFill /> icono carrito de compras
          </div>
          <Form className='d-flex'>
            <Form.Control
              type='search'
              placeholder='Search'
              className='me-2'
              aria-label='Search'
            />
            <Button variant='info'>Search</Button>
          </Form>
          <Nav className='count-buttons'>
<<<<<<< HEAD
            <Link to='/signup'>
              <Button className='count-buttons'>
                Sign up
              </Button>
            </Link>
            <Link to='/login'>
              <Button className='count-buttons'>
                Log in
              </Button>
            </Link>
=======
            <Link to='/login'><Button className='count-buttons'>Log in</Button></Link>
            <Link to='/signup'><Button className='count-buttons'>Sign up</Button></Link>
>>>>>>> e0839473f865f21da01a7e72907377b21dfb8b5a
          </Nav>
        </Navbar.Collapse>
        <div className='vr' />
      </Container>
    </Navbar>
  )
}

export default MainNavbar
