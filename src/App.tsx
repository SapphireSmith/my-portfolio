import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import TransitionProvider from './components/TransitionProvider'

export default function App() {

  return (
    <BrowserRouter>
      <TransitionProvider>
        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)] overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </div>
      </TransitionProvider>
    </BrowserRouter>
  );
}
