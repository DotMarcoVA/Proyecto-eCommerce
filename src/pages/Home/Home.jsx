import React from 'react'
import Cards from '../../components/Cards/Cards'
import { useProductsContext } from '../../context/ProductsContext'
import 'bulma/css/bulma.min.css'

const Home = () => {
  const context = useProductsContext()
  console.log(context.products)
  return (
    <>
      <div className='columns is-multiline'>
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
