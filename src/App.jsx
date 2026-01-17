import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer"
import Body from "./components/Body";
import About from "./components/About";
import ServicesPage from "./components/ServicesPage";
import Contact from "./components/Contact";
import ArahInfotech from "./components/backend/ArahInfotech";


 function App() {
  return (
    <>
      <Navigation />
    <Routes>
      <Route path="/" element={<ArahInfotech />} />
      <Route path="/about" element={<About />} />
      <Route path="/Services" element={<ServicesPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/Moreinformation" element={<ArahInfotech />} />
    </Routes>
      <Footer />

    </>
  );
}

export default App;
