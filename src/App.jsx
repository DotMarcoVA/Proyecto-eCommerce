import './App.css'
import RoutesIndex from './routes/Index'
import { ProductsProvider } from './context/ProductsContext'
import { AuthProvider } from './context/AuthContext'
import { CartProvider } from './context/CartContext'

function App () {
  return (
    <div className='app'>
      <CartProvider>
        <AuthProvider>
          <ProductsProvider>
            <RoutesIndex />
          </ProductsProvider>
        </AuthProvider>
      </CartProvider>
    </div>
  )
}

export default App
