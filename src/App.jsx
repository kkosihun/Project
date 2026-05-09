import { BrowserRouter, Routes, Route } from "react-router-dom"
import RootLayout from "../src/layout/RootLayout.jsx"
import Main from "../src/pages/Main/Main.jsx"
import ProductDetail from "./pages/Main/ProductDetail/ProductDetail.jsx"
import ProductAdd from "./pages/Main/ProductDetail/ProductAdd";
import ProductEdit from "./pages/Main/ProductDetail/ProductEdit";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element = {<RootLayout />}>
          <Route path = "/" element = {<Main />} />
          <Route path = "/item/:id" element ={<ProductDetail />}/>
          <Route path = "/add" element = {<ProductAdd />}/>
          <Route path="/item/:id/edit" element={<ProductEdit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
