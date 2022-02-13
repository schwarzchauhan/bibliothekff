import React, { useState } from 'react';
import  LoginForm   from "./components/LoginForm";
import  Profile   from "./components/Profile";
import { BrowserRouter as Router, Routes,  Switch, Route } from 'react-router-dom';

// functional components
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/user/login" element={ <LoginForm /> } />
        <Route path="/user" element={  <Profile /> } />
      </Routes>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  )
}

export default App;
