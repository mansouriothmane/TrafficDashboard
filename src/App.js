import './App.css';

import NavbarComponent from './components/NavbarComponent';
import Dashboard from './pages/Dashboard';

const App = () => {  
  return (
    <div className="App">
      <NavbarComponent/>
      <Dashboard/>
    </div>
  );
}

export default App;
