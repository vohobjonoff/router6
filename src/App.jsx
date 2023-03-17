import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './components/About'
import Dashboard from './components/DashBoard'
import Error from './components/Error'
import Home from './components/Home'
import Login from './components/Login'
import Products from './components/Products'
import SharedLayout from './components/SharedLayout'
import SingleProduct from './components/SingleProduct'
import ProtectedRoute from './ProtectedRoute'

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'  element={<SharedLayout/>}>
        <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login setUser={setUser} />} />
          <Route path='/products' element={<Products />} />
          <Route path='products/:productId' element={<SingleProduct />} />
          <Route path='/dashboard'
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user } />
            </ProtectedRoute>
          }
          />
        <Route path='*' element={<Error />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
