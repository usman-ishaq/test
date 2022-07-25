import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import data from './data'
import UserList from './user';
import 'antd/dist/antd.css';

function App() {
  const [people, setPeople] = useState(data)
  return (
    <main>
      <section className='container'>
        <h2>UI Detail</h2>
        <h4><ul><li>Initially, homepage includes a list of users with user detail and information</li></ul></h4>
        <UserList people={people} />
        
      </section>
    </main>
  );
}

export default App;
