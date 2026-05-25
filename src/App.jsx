import { BrowserRouter, Route, Routes } from "react-router-dom"
import AboutPage from "./pages/AboutPages"
import ProductDetailPage from "./pages/ProductDetailPage"
import HomePage from "./pages/HomePage"
import ProductPage from "./pages/ProductPage"


function App() {

  return (
    <>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/chi-siamo" element={<AboutPage></AboutPage>}></Route>
        <Route path="/prodotti" element={<ProductPage></ProductPage>}></Route>
        <Route path="/prodotti/:id" element={<ProductDetailPage></ProductDetailPage>}></Route>


      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
