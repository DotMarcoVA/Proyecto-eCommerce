import React from 'react'
import Cards from '../../components/Cards/Cards'
import MainNavbar from '../../components/MainNavbar.jsx/MainNavbar'
import { useProductsContext } from '../../context/ProductsContext'
import './home.css'

const Home = () => {
  const context = useProductsContext()
  return (
    <>
      <MainNavbar />
      <div className='container'>
        {
        context.loading
          ? <h1> Cargando ... </h1>
          : context.products.map((element, i) => (
            <Cards
              products={element}
              key={i}
            />
          ))
      }
      </div>
    </>
  )
}

export default Home
