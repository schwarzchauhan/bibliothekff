import React, { useState } from 'react';
import '../../assets/styles/sass/Form.scss'
import '../../assets/styles/css/global.css'
import UserService from '../../services/UserService';
import { useNavigate } from 'react-router-dom';

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
}


// return true if all char of string are in a..z & string non empty otherwise false
const isUsername = (str) => {
    // https://stackoverflow.com/questions/23476532/check-if-string-contains-only-letters-in-javascript
    let regUsername = /^[a-z]+$/
    // console.log(regUsername.test(str));
    return regUsername.test(str);
    // console.log(regUsername, regUsername.source);
}


export default function LoginForm() {

    const userService = new UserService();
    var bgImg = {
        backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/3/3b/Siegessaeule_Aussicht_10-13_img4_Tiergarten.jpg')"
    };
    // React.useEffect((data) => {
    //     userService.loginRequest(data).then( (res) =>{
    //         return res;
    //     } )
    // },[userService])

    const [details, setDetails] = useState({ unameEmail: "", password: "" });
    const [user, setUser] = useState({ name: "", email: "" });
    const [error, setErrMsg] = useState("");

    let navigate = useNavigate();

    // used to remove err label after 5sec interval
    const resetErr = () => {
        setTimeout(() => {
            setErrMsg("");
        }, 5000);
    }


    const baseUrl = 'http://127.0.0.1:1337/api';

    // const loggedinuser = {
    //     email : 'birte@ham.de', 
    //     password: '7895667594'
    // }

    const submitHandler = async (e) => {
        try {
            e.preventDefault();
            const data = await Login(details);
            console.warn('submithandler', data);
            navigate("/dashboard")
        } catch (err) {
            // console.error('submithandler ~~ ', err, err instanceof Error);
            setErrMsg(err.message)
            resetErr();
        }
    }


    // details : {
    // "unameEmail": "dsfv@maria.com",
    // "password": "wzesdrgf"
    // }
    const Login = async (details) => {
        try {
            console.warn(details);

            if (!details.unameEmail) {
                const err = { message: 'Oops! username or email field is required' };
                throw err;
            }
            if (!details.password) {
                const err = { message: 'Oops! Password is required.' };
                throw err;
            }
            const isUname = isUsername(details.unameEmail);
            if (isUname) {
                console.log('USERNAME hai');
                var body = { unameEmail: details.unameEmail, password: details.password, type: "username" };
                return userService.loginRequest(body);
            } else if (!validateEmail(details.unameEmail)) {
                const err = new Error('Oops! Email is Invalid.');
                throw err;
            } else {
                console.log('EMAIL HAI');
                var body = { unameEmail: details.unameEmail, password: details.password, type: "email" };
                const response = await userService.loginRequest(body);
                return response;
            }

            console.warn('is reaching here');
            // // making a post request
            // const url = baseUrl + '/user/login'
            // const body = {
            //   email: details.email, 
            //   password: details.password
            // };
        } catch (err) {
            // console.error("error while login ", err);
            throw err;
        }

    }

    const Logout = () => {
        console.log("Logout");
        setUser({
            name: "",
            email: ""
        })
        setErrMsg("")
    }


    return (
        //   <div>
        //     <h2>Welcome, {user.name}</h2>
        //     <button onClick={Logout}>Logout</button>
        //   </div>
        <div className='login-form-cont bg-cover' style={bgImg}>
            <div className='pt-5 container'>
                <form onSubmit={submitHandler}>
                    <div className='login-form-inner p-3'>
                        <h2 className='txtAlgnCenter'>LOGIN</h2>
                        {
                            /*Error*/
                            (error) ? (
                                <div className='login-error'>{error}</div>
                            ) : (
                                ""
                            )
                        }
                        <div className='login-form-group p-2'>
                            <label htmlFor='name'>Username or email </label>
                            <br />
                            <input type="text" name="unameEmail" id="name" onChange={e => setDetails({ ...details, unameEmail: e.target.value })} value={details.unameEmail} required />
                        </div>
                        {/* <div className='form-group'>
                    <label htmlFor='email'>Email: </label>
                    <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
                </div> */}
                        <div className='login-form-group p-2'>
                            <label htmlFor='password'>Password: </label>
                            <br />
                            <input type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} required />
                        </div>
                        <div className='login-form-group p-2 mt-2'>
                            <input type="submit" value="LOGIN" className='login-btn' />
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}
