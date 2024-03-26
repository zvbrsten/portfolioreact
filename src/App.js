import './App.css';
import Home from './home';
import Navbar from './Navbar'
import Skills from './Skills';
import Aboutme from './Aboutme';
import Education from './Education';
import Contact from './Contact';
import DarkModeToggle from './Darkmode';
import Footer from './Footer';


function App() {
  return (
    <>
    <Navbar />
    <DarkModeToggle/>
    <Home/>
    <Skills/>
    <Aboutme/>
    <Education/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
