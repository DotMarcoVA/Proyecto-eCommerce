import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Details from '../pages/Details/Details'
import DetailsItem from '../pages/Details/DetailsItem'
import Login from '../pages/Login/Login'
import Signup from '../pages/Signup/Signup'

const Index = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path=':pid' element={<Details />}>
          <Route path=':pid' element={<DetailsItem />} />
        </Route>
        <Route path='*' element={<img src='https://http.cat/404' alt='' srcset='' />} />
      </Routes>
    </>
  )
}

export default Index
