import { Routes, Route } from "react-router-dom";
import { Home } from '../pages/Home/Home';
import { Products } from '../pages/Products/Products';
import { Login } from '../pages/Login/Login';
export function AppRoutes(){
  return(
    <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='/products' element = {<Products />} />
      <Route path='/Login' element={ <Login />} />
    </Routes>
  )
}