import Info from "./data/info"
import './App.css';
import Navbar from './utility/Navbar';
import Footer from "./utility/footer";
import About from "./data/About";
import Education from "./data/education";
import Experience from "./data/experience";
import Contact from "./data/contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Info />
      <About />
      <Education />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
