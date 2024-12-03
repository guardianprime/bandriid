import { BrowserRouter, Routes, Route } from "react-router";

import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Wishlist from "./pages/Wishlist";
import Account from "./pages/Account";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="Wishlist" element={<Wishlist />} />
        <Route path="Account" element={<Account />} />
        <Route path="Checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;