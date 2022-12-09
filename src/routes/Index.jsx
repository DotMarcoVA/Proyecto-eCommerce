import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Signup from '../pages/Sign Up/Signup'
import Login from '../pages/Log In/Login'

const Index = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<img src='https://http.cat/404' alt='' srcset='' />} />
      </Routes>
    </>
  )
}

export default Index
