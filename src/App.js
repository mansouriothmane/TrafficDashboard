import logo from './logo.svg';
import './App.css';

import { Routes, Route } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import NavbarComponent from './components/NavbarComponent';

import HomeComponent from './pages/HomeComponent';
import VehiculesComponent from './pages/VehiculesComponent';
import SensorsComponent from './pages/SensorsComponent';

const App = () => {  
  console.log("Je suis dans App");
  return (
    <div className="App">
      <NavbarComponent/>
      <Routes>
        <Route path="home" element={ <HomeComponent/> } />
        <Route path="vehicules" element={ <VehiculesComponent/> } />
        <Route path="sensors" element={ <SensorsComponent/> } />
      </Routes>
    </div>
  );
}

export default App;
