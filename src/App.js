import React from 'react';
import Header from './components/Header/header.jsx';
import Profile from './components/Profile/profile.jsx';
import ProfileInfo from './components/Profile/profileInfo.jsx';
import ProfileWall from './components/Profile/profileWall.jsx';
import './App.css';


const App = () => {
  return (
    <div className="main">
      <Header />
      <Profile />
      <ProfileInfo />
      <ProfileWall />
    </div>
  )
}

export default App;

