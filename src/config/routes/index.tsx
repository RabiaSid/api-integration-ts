import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AppProduct from '../../pages/Product'
import ProductForm from '../../pages/ProductForm'
import ProductDetail from '../../pages/productDetail'

export default function AppRouter() {
  return <>
  <Router>
    <Routes>
        <Route path='/' element={<AppProduct />}/>
        <Route path='/:id' element={<ProductDetail />}/>
        <Route path='product-form' element={<ProductForm />}/>
        <Route path='product-form/:id' element={<ProductForm />}/>
    </Routes>
  </Router>
  </>
}
