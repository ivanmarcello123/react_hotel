import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Pemesanan from './components/Menu.jsx';
import Main from './components/Main.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Form from './components/Form.jsx';





function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route index element={<Main/>} />
        <Route path="pemesanan" element={<Pemesanan/>}/>
        <Route path="form" element={<Form/>}/>

      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
