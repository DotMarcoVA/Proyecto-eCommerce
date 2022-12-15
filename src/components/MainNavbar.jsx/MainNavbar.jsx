import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import './MainNavbar.css'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../../assets/cat.png'
import Cart from '../../assets/cart.png'

const MainNavbar = () => {
  const { isAuth, logout, user } = useContext(AuthContext)

  return (
    <Navbar bg='dark' variant='dark' expand='lg' fixed='top'>
      <Container fluid>
        <Navbar.Brand href='#'>
          <Link to='/'>
            <img src={Logo} style={{ width: '60px' }} alt='logo' />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='me-auto my-2 my-lg-0'
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {user?.role === 'ADMIN'
              ? (
                <Link to='/addproduct'>
                  <Button variant='outline-info'>Add New Product</Button>{' '}
                </Link>
                )
              : <></>}

          </Nav>

          <Form className='customer d-flex'>
            <input
              className='shopping-cart'
              type='image' id='image' alt=''
              src={Cart}
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
            {
              !isAuth
                ? (
                  <>
                    <Link to='/login'><Button className='count-buttons'>Log in</Button></Link>
                    <Link to='/signup'><Button className='count-buttons'>Sign up</Button></Link>
                  </>
                  )
                : (
                  <>
                    <Button variant='outline-dark' className='count-buttons'><Link to='/dashboard'>My Account</Link></Button>
                    <Button className='count-buttons' variant='outline-danger' onClick={logout}><Link to='/' style={{ textDecoration: 'none' }}>Log Out</Link></Button>
                  </>
                  )
}

          </Nav>
        </Navbar.Collapse>
        <div className='vr' />
      </Container>
    </Navbar>
  )
}

export default MainNavbar
