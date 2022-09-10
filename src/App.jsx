import { BrowserRouter, Routes, Route } from "react-router-dom"
// pages
import {Home, Cart, Favorite, NotFound} from './pages'
// componenets
import {Nav, Header} from './components'


const App = () => {
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
    </BrowserRouter>
  )
}
export default App