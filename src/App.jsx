import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ProductPage from "./pages/ProductPage"


function App() {

  return (
    <>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/prodotti" element={<ProductPage></ProductPage>}></Route>


      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
