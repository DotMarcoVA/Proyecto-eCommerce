import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'

const Index = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<img src='https://http.cat/404' alt='' srcset='' />} />
      </Routes>
    </>
  )
}

export default Index
