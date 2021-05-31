import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';


const App = () => {
  return (
    <BrowserRouter>
      <Sidebar />
      <div className="main">
        <Route component={Profile} path="/profile" />
        <Route component={Dialogs} path="/dialogs" />
      </div>
    </BrowserRouter>
  );
};

export default App;
