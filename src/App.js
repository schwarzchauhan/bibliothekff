import React, { useState } from 'react';
import  LoginForm   from "./components/LoginForm/LoginForm";
import  Profile   from "./components/Profile";
import  Homepage   from "./components/Homepage";
import  Mcqform   from "./components/Forms/Mcqform";
import  Register   from "./components/Forms/Register";
import  McqQuiz   from "./components/McqQuiz";
import Navbar from './components/Navbar/Navbar';
import Error404Pg from './components/pages/Error404Pg';
import PreviewPage from './components/pages/PreviewPage';
import Flagge from './components/pages/Flagge';
import { BrowserRouter as Router, Routes,  Switch, Route } from 'react-router-dom';

// functional components
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Homepage /> } />
        <Route path="/user/login" element={ <LoginForm /> } />
        <Route path="/user/register" element={ <Register /> } />
        <Route path="/dashboard/:username" element={ <Profile  /> } />
        <Route path="/notfound" element={  <Error404Pg /> } />
        <Route path="/mcq/save" element={  <Mcqform /> } />
        <Route path="/quiz/mcq" element={  <McqQuiz /> } />
        <Route path="/view/quiz-response" element={  <PreviewPage /> } />
        <Route path="/flag" element={  <Flagge /> } />
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
