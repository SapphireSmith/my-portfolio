import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import TransitionProvider from './components/TransitionProvider';
import { Suspense, lazy } from 'react';
import Loader from "./components/Loader";

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Portfolio = lazy(() => import('./pages/Portfolio'));

export default function App() {
  return (
    <BrowserRouter>
      <TransitionProvider>
        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)] w-screen ">
          <Suspense fallback={<Loader/>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </div>
      </TransitionProvider>
    </BrowserRouter>
  );
}
