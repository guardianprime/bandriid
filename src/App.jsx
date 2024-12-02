import { BrowserRouter, Routes, Route } from "react-router";

import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="homepage" element={<HomePage />} />
        <Route path="Signup" element={<SignUp />} />
        <Route path="About" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;