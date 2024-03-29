import React, { useState} from 'react';
import axios from 'axios'; 
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Footer() {
    const [formData, setFormData] = useState({
        email: ''
    });
    const handleChange = (e) => {
        setFormData({ ...formData, email: e.target.value });
    };    
    const submitData = (e) => {
        e.preventDefault(); 
        const payload = {
            email: formData.email
        };
        axios.post('api/subscribers', payload, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => {
            if (response.status === 200) {
                toast.success('Thank you for subscribing !');
                setFormData({
                    email: ''
                });
            } 
            else if(response.status === 422){
                toast.success('This email is already subscribed  !');
                setFormData({
                    email: ''
                });
            }
            else {
                console.error('Failed to store data');
            }
        })
        .catch(error => {
            if (error.response && error.response.status === 422 && error.response.data.message) {
                toast.warning(error.response.data.message);
            } else {
                console.error('Error:', error);
                toast.error('Failed to send email. Please try again later.');
            }
        });
    };

    return (
        <>
        <ToastContainer />
            <div id="footer" className="container-fluid text-center text-lg-start text-white" style={{ backgroundColor: '#607194' }}>
                <div className="row">
                    <div className="col-md-12">
                        <section className="">
                            <div className="row">
                                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">
                                        Company Details
                                    </h6>
                                    <p>
                                        Amakomaya is using the DHIS2 open source platform for the collection, reporting, analysis and dissemination of aggregate and individual-level data in a smart and creative way to help healthcare startups, business enterprises, and governments across industries.
                                    </p>
                                </div>

                                <hr className="w-100 clearfix d-md-none" />

                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                                    <p>
                                        {/* <a className="text-white">Link 1</a> */}
                                        Product Engineering
                                    </p>
                                    <p>
                                        {/* <a className="text-white">Link 2</a> */}
                                        Application Development
                                    </p>
                                    <p>
                                        {/* <a className="text-white">Link 2</a> */}
                                        Consulting Services
                                    </p>
                                    <p>
                                        {/* <a className="text-white">Link 2</a> */}
                                        Cloud Enablement
                                    </p>
                                    <p>
                                        AI and Machine Learning Solution
                                    </p>
                                </div>

                                <hr className="w-100 clearfix d-md-none" />
                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">
                                        Support
                                    </h6>
                                    <p>
                                        {/* <a className="text-white"></a> */}
                                        Engage with a Specialist
                                    </p>
                                    <p>
                                        {/* <a className="text-white"></a> */}
                                        DHIS2 Advisory Services
                                    </p>
                                    <p>
                                        {/* <a className="text-white"></a> */}
                                        Usage Terms
                                    </p>
                                    <p>
                                        {/* <a className="text-white"></a> */}
                                        Data Privacy Statement
                                    </p>
                                    <p>
                                        {/* <a className="text-white"></a> */}
                                        Official Announcements
                                    </p>
                                </div>

                                <hr className="w-100 clearfix d-md-none" />
                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                                    <p><i className="fas fa-home mr-3"></i> Kathmandu, Nepal</p>
                                    <p><i className="fas fa-envelope mr-3"></i> dhis2@amakomaya.com, dhis2.amakomaya@gmail.com</p>
                                    <p><i className="fas fa-phone mr-3"></i> + 977 01-4528090</p>

                                    <form onSubmit={submitData}> 
                                    <div className="input-group mb-3">
                                        <input type="email" value={formData.email} onChange={handleChange} className="form-control" placeholder="Enter your email" aria-describedby="button-addon2" />
                                        <button className="btn btn-primary" type="submit" id="button-addon2">Subscribe</button>
                                    </div>
                                </form>
                                </div>
                            </div>
                        </section>

                        <hr className="my-3" />
                        <section className="p-3 pt-0">
                            <div className="row d-flex align-items-center">
                                <div className="col-md-7 col-lg-8 text-center text-md-start">
                                    <div className="p-3">
                                        Copyright © 2024, Amakomaya Pvt. Ltd. All rights reserved
                                        {/* <a className="text-white" href="https://mdbootstrap.com/"> DHIS2 Nepal</a> */}
                                    </div>
                                </div>

                                <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                                    <a className="btn btn-outline-light btn-floating m-1" role="button" target="_blank" href='https://amakomaya.com/'><i
                                        className="bi bi-globe"></i></a>
                                    <a className="btn btn-outline-light btn-floating m-1" role="button" target="_blank" href='https://www.facebook.com/amakomaya2012'><i
                                        className="bi bi-facebook"></i></a>

                                    <a className="btn btn-outline-light btn-floating m-1" role="button" target="_blank" href='https://twitter.com/amakomaya'><i
                                        className="bi bi-twitter-x"></i></a>

                                    <a className="btn btn-outline-light btn-floating m-1" role="button" target="_blank" href='https://www.instagram.com/amakomaya/'><i
                                        className="bi bi-instagram"></i></a>

                                    <a className="btn btn-outline-light btn-floating m-1" role="button" target="_blank" href='https://www.youtube.com/c/amakomaya'><i
                                        className="bi bi-youtube"></i></a>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer