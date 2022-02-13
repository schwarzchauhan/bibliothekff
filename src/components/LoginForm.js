import React, {useState} from 'react';
import axios  from "axios";

export default function LoginForm() {
  
    const [details, setDetails] = useState({name: "", email: "", password: ""});
    const [user, setUser] = useState({name: "", email: ""});
    const [error, setError] = useState("");


    const baseUrl = 'http://127.0.0.1:1337/api';

    // const loggedinuser = {
    //     email : 'birte@ham.de', 
    //     password: '7895667594'
    // }

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }


    const Login = details => {
        console.log(details);
    
        // making a post request
        const url = baseUrl + '/user/login'
        const body = {
          email: details.email, 
          password: details.password
        };
        axios.post(url, body)
          .then( (res) => {
            console.log(res);
          } )
          .catch((err)=> {
            setError(err);
            console.log(err);
          })
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
    //     <div>
    //     <h2>Welcome, {user.name}</h2>
    //     <button onClick={Logout}>Logout</button>
    //   </div>
        <form onSubmit={submitHandler}>
            <div className='form-innner'>
                <h2>LOGIN</h2>
                {  
                    /*Error*/
                    (!error) ? (
                        <div className='loginError'>{error}</div>
                    ) :(
                        ""
                    ) 
                }
                <div className='form-group'>
                    <label htmlFor='name'>Name: </label>
                    <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name} />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email: </label>
                    <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password: </label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                </div>
                <input type="submit" value="LOGIN" />
                
            </div>
        </form>

    )
}
