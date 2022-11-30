import './App.css'
import RoutesIndex from './routes/Index'
import { ProductsProvider } from './context/ProductsContext'

function App () {
  return (
    <div className='app'>
      <ProductsProvider>
        <RoutesIndex />
      </ProductsProvider>
    </div>
  )
}

export default App
