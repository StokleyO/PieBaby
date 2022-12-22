import "./styles.css";
import Navbar from "./Navbar.jsx";
import About from "./About.jsx";
import Footer from "./Footer.jsx";
import Nutrition from "./Nutrition.jsx";
import Order from './Order.jsx';
import Blog from './Blog.jsx';
import Vip from './Vip.jsx';
import Hero from './components/Hero';



export default function App() {

    
  return (
    <div className="App">
      
      <Navbar />
      <About />
      <Footer />
      <Nutrition/>
      <Order />
      <Vip />
      <Blog/>
    

    </div>
  );
}