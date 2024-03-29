import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios'; 
import AOS from 'aos';
import 'aos/dist/aos.css';

function SupportSection() {
    const form = useRef();
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        subject: 'Health Facility Setup',
        message: ''
    });

    const sendEmail = (e) => {
        e.preventDefault(); 
        const payload = {
            first_name: formData.fname,
            last_name: formData.lname,
            email: formData.email,
            subject: formData.subject,
            message: formData.message
        };
        axios.post('api/support-info', payload, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => {
            if (response.status === 200) {
                toast.success('Thank you for you support !');
                setFormData({
                    fname: '',
                    lname: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            } else {
                console.error('Failed to store data');
                
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    useEffect(() => {
        AOS.init()
    }, [])

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <>
            <section id="contact-us" className="py-5">
                <div className="text-center pb-5" data-aos="fade-up" data-aos-upoffset="200">
                    <h3 className="heading-text"> Support</h3>
                    <small className="small-text">feel free to reach out our team is
                        ready
                        do addres any
                        inqueres you
                        may have. </small><br />

                    <hr className="mt-2 w-25 m-auto" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-7 col-12 mx-auto" data-aos="zoom-up" data-aos-upoffset="200">
                            <div className="mb-4 text-secondary">
                                <form ref={form} onSubmit={sendEmail}>
                                    <div className="mb-3">
                                        <input type="text" className="form-control" id="fname" name="fname"
                                            value={formData.fname} onChange={handleChange}
                                            placeholder="Enter your first name * " required />
                                    </div>

                                    <div className="mb-3">
                                        <input type="text" className="form-control contact-form" id="lname" name="lname"
                                            value={formData.lname} onChange={handleChange}
                                            placeholder="Enter your last name *" required />
                                    </div>

                                    <div className="mb-3">
                                        <input type="email" className="form-control contact-form" id="email" name="email"
                                            value={formData.email} onChange={handleChange}
                                            placeholder="Enter your email *" required />
                                    </div>

                                    <div className="col-md-12 mb-3">
                                    <select className="form-select" aria-label="Default select example" name="subject"
                                        value={formData.subject} onChange={handleChange} required>
                                        <option value="Health Facility Setup">Health Facility Setup</option>
                                        <option value="Subscription Issues">Subscription Issues</option>
                                        <option value="General Inquery">General Inquiry</option>
                                    </select>
                                    </div>

                                    <div className="mb-3">
                                        <textarea className="form-control contact-form" placeholder="Enter your message *"
                                            id="floatingTextarea2" name="message" style={{ height: '150px' }}
                                            value={formData.message} onChange={handleChange} required></textarea>
                                    </div>

                                    <div className="mb-3 text-center">
                                        <button type="submit" className='send-btn'>Send <i className="bi bi-send-fill"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SupportSection;

