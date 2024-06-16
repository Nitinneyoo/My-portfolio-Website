import Info from "./data/info"
import './App.css';
import Navbar from './utility/Navbar';
import About from "./data/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Info />
      <About />
    </div>
  );
}

export default App;
