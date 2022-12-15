import { createContext, useState, useEffect, useContext } from 'react'

const CartContext = createContext()

function CartProvider (props) {
  const [cartItems, setCartItems] = useState({})

  useEffect(() => {
    return () => {

    }
  }, [])

  const values = {
    cartItems,
    setCartItems
  }

  return (
    <CartContext.Provider value={values}>
      {props.children}
    </CartContext.Provider>
  )
}

const useCartContext = () => {
  const context = useContext(CartContext)
  return context
}

export {
  CartProvider,
  useCartContext
}
