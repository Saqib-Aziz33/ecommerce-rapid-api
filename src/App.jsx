import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect } from "react"
// pages
import {Home, Cart, Favorite, NotFound} from './pages'
// componenets
import {Nav, Header} from './components'
// redux
import { useDispatch, useSelector } from "react-redux"
import { fetchCategories } from "./app/features/categoriesSlice"
import { fetchProducts } from "./app/features/productSlice"

const App = () => {
  const dispatch = useDispatch()
  const {status} = useSelector(state => state.categories)
  const {status: productStatus} = useSelector(state => state.products)

  useEffect(() => {
    if(status === 'idle') dispatch(fetchCategories())
    if(productStatus === 'idle') dispatch(fetchProducts())
  }, [dispatch, status, productStatus])

  return (
    <BrowserRouter>
    <Header />
    <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <div style={{marginTop: '5rem'}}></div>
    </BrowserRouter>
  )
}
export default App