import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {MemberForm, newMember} from './MemberForm';
import Members from './Members';

function App() {
  //creating hook statement to add new members to an array of objects containing members
  const [members, setMembers] = useState([
    {
      id: Date.now(),
      name: "Jeff",
      email: "fakemail@fake.com",
      role: "backend-dev"
    }
  ]);
  //creating a function to add a new member to the array
  const addNewMember = member => {
    //creating the object skeleton to pass information from member
    const newMemeber = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    //setting the value of the members array equal to previous notes as well as the new note created.
    setMembers([...members, newMember]);
  }
  return (
    <div className="App">
      <h3>Members</h3>
      <MemberForm addNewMember = {addNewMember}/>
      <Members members = {members}/>
    </div>
  );
}

export default App;
