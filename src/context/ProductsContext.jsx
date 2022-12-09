import { createContext, useState, useEffect, useContext } from 'react'
import axios from 'axios'

// Creacion de Contexto Vacio
const ProductsContext = createContext()

// Componente Proveedor de Contexto
const ProductsProvider = (props) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [userName, setuserName] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)

  const fetchApi = async () => {
    const URL = 'https://e-commerce-backend-production-ad56.up.railway.app/api/v1/item'
    try {
      const results = await axios.get(`${URL}`)
      setProducts(results.data)
    } catch (error) {
      console.log('error', error)
    }
  }

  useEffect(() => {
    fetchApi()
    setLoading(false)
  }, [])

  const value = {
    products,
    loading,
    userName,
    isLoggedIn,
    setuserName,
    setIsLoggedIn,
    isAdmin,
    setIsAdmin
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
