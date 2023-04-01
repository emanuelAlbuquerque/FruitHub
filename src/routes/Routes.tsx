import { Bascket } from 'Pages/Bascket'
import { DeliveryStatus } from 'Pages/DeliveryStatus'
import { Home } from 'Pages/Home'
import { Login } from 'Pages/Login'
import { OrderComplete } from 'Pages/OrderComplete'
import { Product } from 'Pages/Product'
import { Register } from 'Pages/Register'
import { Splash } from 'Pages/Splash'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const RoutesAplication = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home/:id" element={<Home />} />
        <Route path="/addBascket/:id" element={<Product />} />
        <Route path="/basckets/:id" element={<Bascket />} />
        <Route path="/orderComplete" element={<OrderComplete />} />
        <Route path="/deliveryStatus" element={<DeliveryStatus />} />
      </Routes>
    </BrowserRouter>
  )
}
