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

// username starts with a-z , only made up of a-z0-9_
const validateUsername = (username) => {
    const isValidUsername = /^[a-z][a-z0-9_]*$/.test(username);
    return isValidUsername
}

export default function Register() {

    const userService = new UserService();
    var bgImg = {
        backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/3/3b/Siegessaeule_Aussicht_10-13_img4_Tiergarten.jpg')"
    };

    const [details, setDetails] = useState({ email: "", password: "", name: "", username: "" });
    const [error, setErrMsg] = useState("");

    let navigate = useNavigate();

    // used to remove err label after 5sec interval
    const resetErr = () => {
        setTimeout(() => {
            setErrMsg("");
        }, 5000);
    }

    const submitHandler = async (e) => {
        try {
            e.preventDefault();
            const data = await Register(details);
            navigate("/user/login")
        } catch (err) {
            setErrMsg(err.message)
            resetErr();
        }
    }


    const Register = async (details) => {
        try {
            const { email, password, name, username } = details;

            if(!(email && password && name)){
                throw new Error('Oops! Fields missing....')
            }
            if (!validateEmail(email)) {
                throw new Error('Oops! Invalid email...')
            }
            if (!validateUsername(username)) {
                throw new Error('Oops! Invalid username...')
            }
            var body = { email, password, name, username };
            return userService.register(body);
        } catch (err) {
            throw err;
        }

    }


    return (
        <div className='login-form-cont bg-cover' style={bgImg}>
            <div className='pt-5 container'>
                <form onSubmit={submitHandler}>
                    <div className='login-form-inner p-3'>
                        <h2 className='txtAlgnCenter'>REGISTER</h2>
                        {
                            /*Error*/
                            (error) ? (
                                <div className='login-error'>{error}</div>
                            ) : (
                                ""
                            )
                        }
                        <div className='login-form-group p-2'>
                            <label htmlFor='name'><i className="lni lni-user"></i> Name </label>
                            <br />
                            <input type="text" name="name" id="name" onChange={e => setDetails({ ...details, name: e.target.value })} value={details.name} required />
                        </div>
                        <div className='login-form-group p-2'>
                            <label htmlFor='username'><i className="lni lni-user"></i> Username </label>
                            <br />
                            <input type="text" name="username" id="username" onChange={e => setDetails({ ...details, username: e.target.value })} value={details.username} required />
                        </div>
                        <div className='login-form-group p-2'>
                            <label htmlFor='email'><i className="lni lni-user"></i> Email </label>
                            <br />
                            <input type="text" name="email" id="email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} required />
                        </div>
                        <div className='login-form-group p-2'>
                            <label htmlFor='password'><i className="lni lni-lock-alt"></i> Password: </label>
                            <br />
                            <input type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} required />
                        </div>
                        <div className='login-form-group p-2 mt-2'>
                            <input type="submit" value="Register" className='login-btn' />
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}
