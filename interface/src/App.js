import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Navbar from "./components/Dashboard/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Navbar/>
          <Dashboard/>
      </header>
    </div>
  );
}

export default App;
