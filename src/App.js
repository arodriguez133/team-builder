import React, {useState} from 'react';
import TeamCard from './components/TeamCard';
import Form from './components/Form';
import logo from './logo.svg';
import './App.css';

function App() {
  const [teamMembers, setTeamMembers] = useState([{
    id: 1, 
    name: 'Adan Rodriguez',
    email: 'arodriguez_11@live.com',
    role: 'Full Stack Web Development'
  }]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
