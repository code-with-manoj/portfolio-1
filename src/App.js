import Navbar from "./Components/Navbar";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Footer from "./Components/Footer";
import Resume from "./Components/Pages/Resume";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
