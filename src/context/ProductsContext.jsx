import { createContext, useState, useEffect, useContext } from 'react'
import axios from 'axios'

// Creacion de Contexto Vacio
const ProductsContext = createContext()

// Componente Proveedor de Contexto
const ProductsProvider = (props) => {
  const [products, setProducts] = useState([])

  const fetchApi = async () => {
    const URL = 'https://ecomerce-master.herokuapp.com/api/v1/item'
    try {
      const results = await axios.get(`${URL}`)
      console.log('results', results.data)
      setProducts(results.data)
    } catch (error) {
      console.log('error', error)
    }
  }

  useEffect(() => {
    fetchApi()
  }, [])

  const value = {
    products
  }

  return (
    <ProductsContext.Provider value={value}>{props.children}</ProductsContext.Provider>
  )
}

// Consumidor de Contexto
const useProductsContext = () => {
  const context = useContext(ProductsContext)
  return context
}

// Exportar las funciones Proveedora y Consumidora
export {
  ProductsProvider,
  useProductsContext
}
