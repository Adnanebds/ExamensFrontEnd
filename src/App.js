import './App.css';
import {
  BrowserRouter, 
  Routes,
  Route,
} from "react-router-dom";
import { useState } from 'react';

import Home from "./components/Home";
import Login from './components/Login';
import Registration from './components/Registration';
import Magazijn from './components/Magazijn';
import Contact from './components/Contact';
import Forgot from './components/ForgotPassword'

const App = () => {
  const [token, setToken] = useState();
  

  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/registreren" element={<Registration/>}/>
        <Route path="/magazijn" element={<Magazijn/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/vergeten" element={<Forgot/>}/>
      </Routes>
    </BrowserRouter>
  )

}


export default App;
