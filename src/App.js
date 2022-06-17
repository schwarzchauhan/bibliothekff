import React, { useState } from 'react';
import  LoginForm   from "./components/LoginForm/LoginForm";
import  Profile   from "./components/Profile";
import  Homepage   from "./components/Homepage";
import  Mcqform   from "./components/Forms/Mcqform";
import  McqQuiz   from "./components/McqQuiz";
import Navbar from './components/Navbar/Navbar';
import Error404Pg from './components/pages/Error404Pg';
import PreviewPage from './components/pages/PreviewPage';
import { BrowserRouter as Router, Routes,  Switch, Route } from 'react-router-dom';

// functional components
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Homepage /> } />
        <Route path="/user/login" element={ <LoginForm /> } />
        <Route path="/dashboard" element={ <Profile authorized={true}  /> } />
        <Route path="/notfound" element={  <Error404Pg /> } />
        <Route path="/mcq/save" element={  <Mcqform /> } />
        <Route path="/quiz/mcq" element={  <McqQuiz /> } />
        <Route path="/view/quiz-response" element={  <PreviewPage /> } />
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
