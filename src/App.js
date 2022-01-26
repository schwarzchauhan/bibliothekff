import './App.css';
import React, { useState } from 'react';
import  LoginForm   from "./components/LoginForm";
import axios  from "axios";

// functional components
function App() {

  const baseUrl = 'http://127.0.0.1:1337/api';

  const loggedinuser = {
    email : 'birte@ham.de', 
    password: '7895667594'
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    // making a post request
    const url = baseUrl + '/user'
    // fetch(url, {
    //   method: 'POST', 
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': url
    //   }, 
    //   body: JSON.stringify({
        // email: details.email, 
        // password: details.password
      // })
    // })
    // .then((res)=> {
    //   console.log(res);
    // })
    // .catch((err) => {
    //   console.log(err);
    // })
    const body = {
      email: details.email, 
      password: details.password
    };
    axios.post(url, body)
      .then( (res) => {
        console.log(res);
      } )
      .catch((err)=> {
        console.log(err);
      })


    if(details.email === loggedinuser.email){
        console.log('logged in');
        setUser({
          name : details.name, 
          email: details.email
        })
    }else {
        console.log('wrong credentials');
        setError("wrong credentials")
    }
  }

  const Logout = () => {
    console.log("Logout");
    setUser({
       name: "",
       email: ""
    })
    setError("")
  }

  return (
    <div className="App">
      { 
        (user.email!=="") ? (
          <div>
            <h2>Welcome, {user.name}</h2>
            <button onClick={Logout}>Logout</button>
          </div>
        ) : (
          <LoginForm Login={Login} error={error} />
        )
      }
        
    </div>
  );



}

export default App;
