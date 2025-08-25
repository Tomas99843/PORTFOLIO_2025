import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";


function App() {
  return (
      <div className="p-lateral">
        <NavBar/>
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
      </div>
      
  );
}
export default App;