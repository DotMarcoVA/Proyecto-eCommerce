import React from 'react'
import { useProductsContext } from '../../context/ProductsContext'

const Home = () => {
  const context = useProductsContext()
  console.log(context.products)
  return (
    <>
      {
      context.loading
        ? <h1> Cargando ... </h1>
        : context.products.map((p) => (
          <div key={p._id}>
            <h4>{p.product_name}</h4>
            <h6>{p.description}</h6>
            <p>${p.price}</p>
          </div>
        ))
    }
    </>
  )
}

export default Home
