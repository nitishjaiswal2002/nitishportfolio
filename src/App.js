import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Components/intro/Intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/works/Works";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonial from "./Components/Testimonial/Testimonial";
import Contacts from "./Components/Contacts/Contacts";
import Footer from "./Components/Footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";




function App() {

const theme=useContext(themeContext);
const darkMode=theme.state.darkMode;
  return (
    <div className="App"
    style={{
      background: darkMode ? "black" : "",
      color: darkMode ? "white" : "",
    }}
    >
    <Navbar/>
    <Intro/>
    <Services/>
    <Experience/>
    <Works/>
    <Portfolio/>
    <Testimonial/>
    <Contacts/>
    <Footer/>
    </div>
  );
}

export default App;
