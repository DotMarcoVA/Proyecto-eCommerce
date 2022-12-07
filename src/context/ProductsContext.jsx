import { createContext, useState, useEffect, useContext } from 'react'
import axios from 'axios'

// Creacion de Contexto Vacio
const ProductsContext = createContext()

// Componente Proveedor de Contexto
const ProductsProvider = (props) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [item, setItem] = useState({})
  const [selectedItem, setSelectedItem] = useState()
  const [loadingItem, setLoadingItem] = useState(true)

  const fetchApi = async () => {
    const URL = 'https://e-commerce-backend-production-ad56.up.railway.app/api/v1/item'
    try {
      const results = await axios.get(`${URL}`)
      setProducts(results.data)
    } catch (error) {
      console.log('error', error)
    }
  }

  const fetchItem = async () => {
    const IURL = `https://e-commerce-backend-production-ad56.up.railway.app/api/v1/item/${selectedItem}`
    try {
      const results = await axios.get(`${IURL}`)
      setItem(results.data)
    } catch (error) {
      console.log('error', error)
    }
  }

  useEffect(() => {
    fetchApi()
    setLoading(false)
  }, [])

  useEffect(() => {
    if (selectedItem) {
      fetchItem()
      setLoadingItem(false)
    }
  }, [selectedItem])

  const value = {
    products,
    loading,
    setSelectedItem,
    loadingItem,
    item
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
