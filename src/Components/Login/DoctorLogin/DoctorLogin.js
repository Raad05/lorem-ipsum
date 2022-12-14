import './DoctorLogin.css';

import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

const DoctorLogin = () => {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignup = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate('/doctor-page')
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className='doctor-login'>
            <h1 className='text-center p-10 text-5xl font-bold'>Doctor Login</h1>
            <div className="login-form w-1/4 h-1/2 m-auto mt-10">
                <form onSubmit={handleSignup}>
                    <label>
                        <p className='mb-3 text-xl'>Email</p>
                        <input type="text" placeholder="Email" name='email' className="input w-full mb-5" />
                    </label>
                    <label>
                        <p className='mb-3 text-xl'>Password</p>
                        <input type="password" placeholder="Password" name='password' className="input w-full mb-3" />
                    </label>
                    <div className="flex justify-between items-center">
                        <div className='flex items-center'>
                            <input type="checkbox" className="checkbox bg-white mr-2" />
                            <p className='text-xl'>Remember me</p>
                        </div>
                        <button className="btn btn-link text-md">Forgot password?</button>
                    </div>
                    <div className='flex justify-center mt-5'>
                        <button type='submit' className="btn login-btn w-full">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DoctorLogin;