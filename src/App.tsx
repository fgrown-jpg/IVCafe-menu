
import './App.css'
import {Routes , Route} from "react-router"
import Store from './pages/Store'
// import Cart from './pages/Cart'
import Product from './pages/Product'
import Layout from './components/layout/Layout'
import ShoppingContext from './components/context/ShoppingContext'
function App() {
  return(
<ShoppingContext>
<Layout>
  
<Routes>
  
  <Route path='/' element={<Store/>}/>
  {/* <Route path='/cart' element={<Cart/>}/> */}
  <Route path='/product/:id' element={<Product/>}/>
  
</Routes>

</Layout>
</ShoppingContext>

  )
}

export default App
