import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import KebijakanPrivasi from "./pages/KebijakanPrivasi";
import SyaratKetentuan from "./pages/SyaratKetentuan";
import TentangKami from "./pages/TentangKami";
import Fitur from "./pages/Fitur";
import Harga from "./pages/Harga";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/syarat_ketentuan" element={<SyaratKetentuan />} />
        <Route exact path="/kebijakan_privasi" element={<KebijakanPrivasi />} />
        <Route exact path="/tentang_kami" element={<TentangKami />} />
        <Route exact path="/fitur" element={<Fitur />} />
        <Route exact path="/harga" element={<Harga />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
