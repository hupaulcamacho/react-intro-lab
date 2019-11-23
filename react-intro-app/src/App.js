import React from 'react';
import './App.css';

import ContactList from './components/ContactList'
import Profile from './components/Profile'
import PostsList from './components/PostsList'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      
      <div id='topnav'>
        <Navbar />
      </div>
      
      <div id='main-profile'>
        <Profile />
      </div>

      <div id='posts-container'>
        <PostsList />
      </div>

      <div id='contacts-container'>
        <ContactList />
      </div>
      
      
    </div>
  );
}

export default App;
