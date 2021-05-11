import React from 'react';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import ProfileCard from './components/ProfileCard/ProfileCard.jsx';
import ProfileInfo from './components/ProfileInfo/ProfileInfo.jsx';
import ProfileWall from './components/ProfileWall/ProfileWall.jsx';
import './App.css';

const App = () => {
  return (
    <>
      <Sidebar />
      <div className="main">
        <div className="profile__main">
          <ProfileCard />
          <ProfileInfo />
        </div>
        <ProfileWall />
      </div>
    </>
  );
};

export default App;
