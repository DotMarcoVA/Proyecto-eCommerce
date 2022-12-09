import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
<<<<<<< HEAD
import Signup from '../pages/Sign Up/Signup'
import Login from '../pages/Log In/Login'
=======
import Details from '../pages/Details/Details'
import DetailsItem from '../pages/Details/DetailsItem'
import Login from '../pages/Login/Login'
import Signup from '../pages/Signup/Signup'
>>>>>>> e0839473f865f21da01a7e72907377b21dfb8b5a

const Index = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
<<<<<<< HEAD
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
=======
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path=':pid' element={<Details />}>
          <Route path=':pid' element={<DetailsItem />} />
        </Route>
>>>>>>> e0839473f865f21da01a7e72907377b21dfb8b5a
        <Route path='*' element={<img src='https://http.cat/404' alt='' srcset='' />} />
      </Routes>
    </>
  )
}

export default Index
