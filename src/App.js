import React, {useState} from 'react';
import TeamCard from './components/TeamCard';
import Form from './components/Form';
import logo from './logo.svg';
import './App.css';

function App() {
  //Initial Value
  const [teamMembers, setTeamMembers] = useState([{
    id: 1, 
    name: 'Adan Rodriguez',
    email: 'arodriguez_11@live.com',
    role: 'Full Stack Web Development'
  }]);

  //Format for applying card to new member
  const addMember = card => {
    const newCard ={
      id: Date.now(),
      name: card.name,
      email: card.email,
      role: card.role
    }
    setTeamMembers([...teamMembers, newCard]);
  }
  return (
    <div>
    <Form addMember={addMember} />
    <TeamCard teamMembers = {teamMembers} />
    </div>
  );
}

export default App;
