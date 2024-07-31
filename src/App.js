import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Service from "./Components/Service/Service";
import Work from "./Components/Work/Work";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Work />
      <About />
      <Service />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
