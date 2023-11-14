import React from "react";
import Form from './components/Form';
import './App.css';
import { Navbar } from "./components/Navbar"
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { Contact } from "./Screens/Contact";
import { Services } from "./Screens/Services";
import About from "./Screens/About";
import Adminscreen from "./Screens/Adminscreen";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <BrowserRouter>
          <Routes>
            <Route exact path="/contact" element={<Contact/>}></Route>
            <Route exact path="/services" element={<Services/>}></Route>
            <Route exact path="/about" element={<About/>}></Route>
            <Route exact path="/secret-admin" element={<Adminscreen />}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
