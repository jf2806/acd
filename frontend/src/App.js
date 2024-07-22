import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// pages
import Home from "./pages/Home";
import Aktuelles from "./pages/Aktuelles";
import Training from "./pages/Training";
import Formulare from "./pages/Formulare";
import Kontakt from "./pages/Kontakt";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import ArticleInfo from "./pages/ArticleInfo";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="mt-24"></div>
        <div className="flex flex-col min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aktuelles" element={<Aktuelles />} />
            <Route path="/aktuelles/:id" element={<ArticleInfo />} />
            <Route path="/training" element={<Training />} />
            <Route path="/formulare" element={<Formulare />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
          </Routes>
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
