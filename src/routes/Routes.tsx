import { Login } from 'Pages/Login'
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
      </Routes>
    </BrowserRouter>
  )
}
