import './App.css';
import Navbar from './components/Navbar';
import Cart from "./components/Pages/Cart/Cart"
import Shop from "./components/Pages/Shop/Shop"
import { BrowserRouter as Router ,Routes , Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
         <Navbar />

        <Routes>
          <Route path="/" element={ < Shop />}/>
          <Route path="/cart" element={ <Cart />}/>
        </Routes>
      </Router>
  </div>
  );
}

export default App;
