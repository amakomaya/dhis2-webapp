import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import Navbar2 from '../Registration/Navbar2.jsx';
import { useNavigate } from 'react-router-dom';
const Login = () => {  
    const navigate = useNavigate();
        const [user, setUser] = useState({
        username: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        username: '',
        password: '',
    });

    const form = useRef();

    useEffect(() => {
        AOS.init()
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        // Validate username
        if (user.username === '') {
            setErrors((prevErrors) => ({...prevErrors, username: 'Username is required' }));
            return;
        }
        // Validate password
        if (user.password === '') {
            setErrors((prevErrors) => ({...prevErrors, password: 'Password is required' }));
            return;
        }

        const payload = {
            username: user.username,
            password: user.password,
        };
        
        axios.post('api/login', JSON.stringify(payload), {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => {
            if (response.status === 200) {
                // Store token in local storage
                localStorage.setItem('token', response.data.token);
                console.log('token', response.data.token);
                navigate('/local-support');             
                //    window.location.href = '/local-support';
            } else {
                toast.error('Failed to log in');
            }
        })
        .catch(error => {
            if (error.response && error.response.status === 401) {
                toast.error('Unauthorized login. Please try again.');
            } else {
                console.error('Error:', error);
                toast.error('Failed to log in. Please try again later.');
            }
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '',
        }));
    };

    return (
        <>
            <Navbar2 />
            <section className="hero-section" id="hero">
                <div className="container-fluid ">
                    <div className="row justify-content-evenly py-5">
                        <div className="col-md-4 pb-5 pt-4 px-4 border rounded shadow" data-aos="zoom-in" data-aos-upoffset="200">
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="row g-3">
                                    <div className="col-md-12">
                                        <h4 className="text-center">Login</h4>
                                        <input type="text" className={`form-control custom-form ${errors.username? 'is-invalid' : ''}`} id='username' name="username" onChange={handleInputChange} value={user.username}
                                            placeholder="Enter your username" />
                                        {errors.username && <div className="invalid-feedback">{errors.username}</div>}
                                    </div>

                                    <div className="col-md-12">
                                        <input type="password" className={`form-control custom-form ${errors.password? 'is-invalid' : ''}`} id='password' name="password" onChange={handleInputChange} value={user.password}
                                            placeholder="Enter your password" />
                                        {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                                    </div>

                                    <div className="d-grid gap-2">
                                        <button className="btn btn-primary custom-form" type="submit">Log In</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login;
