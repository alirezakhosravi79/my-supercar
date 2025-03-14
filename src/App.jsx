import About from "./components/About";
import CarVideo from "./components/CarVideo";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Inventory from "./components/Inventory";
import Navbar from "./components/Navbar";
import Repair from "./components/Repair";

function App() {
  return (
    <>
     <Navbar />
     <Hero />
     <CarVideo />
     <About />
     <Repair />
     <Inventory />
     <Contact />
     <Footer />
    </>
  );
}

export default App;
