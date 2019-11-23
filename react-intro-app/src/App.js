import React from 'react';
import './App.css';

import ContactList from './components/ContactList';
import Profile from './components/Profile'

function App() {
  return (
    <div className="App">
      <Profile />
      <ContactList />
    </div>
  );
}

export default App;
