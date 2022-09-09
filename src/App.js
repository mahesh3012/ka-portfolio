import {BrowserRouter} from 'react-router-dom';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Originals from "./components/Originals";
import Covers from "./components/Covers";
function App() {
  return (
  <BrowserRouter>
    <Navbar/>
    <Home/>
    <About/>
    <Originals/>
    <Covers/>
  </BrowserRouter>
  );
}

export default App;
