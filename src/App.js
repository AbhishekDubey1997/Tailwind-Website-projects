import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Experts from "./components/Experts";
import NewsLetter from "./components/NewsLetter";
import Plans from "./components/Plans";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route exact path="/" element = {<Banner/>} />
        <Route path="/Tutorials" element = {<Experts />}/>
        <Route path="/Contact" element = {<NewsLetter />}/>
        <Route path="/Resources" element = {<Plans />}/>
        
        
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
