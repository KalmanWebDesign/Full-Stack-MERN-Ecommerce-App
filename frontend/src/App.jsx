import { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Navbar from './components/Navbar/Navbar';
import useProducts from './hooks/useProducts';
import './App.css';

function App() {
  const products = useProducts();
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart')
    return savedCart ? JSON.parse(savedCart) : [];
  })

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (product) => {
    if (cart.some(cartItem => cartItem._id === product._id)) {
      alert("Item is already in your cart")
    } else {
      alert("Item added to cart")
      setCart([...cart, { ...product, qty: 1 }])
    }
  }

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item._id !== productId))
  }

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price || 0) * (item.qty || 1), 0)
  }

  const handleQuantityChange = (productId, newQuantity) => {
    setCart(prevCart => prevCart.map(item =>
      item._id === productId ? { ...item, qty: newQuantity } : item
    ))
  }

  return (
    <>
      <BrowserRouter>
        <Navbar cartItems={cart} />
        <Routes>
          <Route path='/' element={<Home products={products} addToCart={addToCart} />} />
          <Route path='/cart' element={<Cart cart={cart}
            removeFromCart={removeFromCart}
            calculateTotalPrice={calculateTotalPrice} handleQuantityChange={handleQuantityChange} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
