import './App.css'
import RoutesIndex from './routes/Index'
import { ProductsProvider } from './context/ProductsContext'
import { AuthProvider } from './context/AuthContext'

function App () {
  return (
    <div className='app'>
      <AuthProvider>
        <ProductsProvider>
          <RoutesIndex />
        </ProductsProvider>
      </AuthProvider>
    </div>
  )
}

export default App
