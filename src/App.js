import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from './pages/Product'
import Pagination from "./pages/Pagination";
import Anouncements from "./components/Announcements";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Anouncements/>
     <Navbar/>
     <Pagination />
    </div>
  );
}

export default App;
