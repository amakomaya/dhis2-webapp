// Import Libraries
import React, {useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import '../Registration/Registration.css';
import Navbar from './Navbar';
import axios from 'axios';
import { toast } from 'react-toastify';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useParams } from 'react-router-dom';

function Newsletter() {
    const { encryptedId } = useParams(); 

     const [user, setuser] = useState({
            newsletter_id: '',
            subject: '',
            top_banner: null,
            date: '',
            title: '',
            image: null,
            image_link: '',
            summary: '',
            description: '',  
            is_upcoming_events_date:'',
            is_upcoming_events_time:'',
            is_upcoming_events_location:'',
            registration_link:'',
            meeting_link:''
        })
        const [error, setError] = useState({
            newsletter_id: '',
            subject: '',
            top_banner: '',
            date: '',
            title: '',
            image: '',
            image_link: '',
            summary: '',
            description: '',  
        });
        
       const handleChange = (e) => {
        const { name, value } = e.target;
        
        setuser((prevUser) => ({
            ...prevUser,
            [name]: value
        }));
    
        setError((prevError) => ({
            ...prevError,
            [name]: ''
        }));
    };

    useEffect(() => {
        if (encryptedId) {
            axios.get(`/api/newsletter/edit/${encodeURIComponent(encryptedId)}`)
                .then(response => {
                    setuser(response.data);
                })
                .catch(error => {
                    console.error("Error fetching newsletter:", error);
                });
        }
    }, [encryptedId, axios]);
    
  
      const handleEditorChange = (event, editor) => {
        const data = editor.getData();
        setuser(prevUser => ({
            ...prevUser,
            description: data
        }));
    };
    const handleFileChange = (e) => {
        const { name, files } = e.target;
        const file = files[0];
    
        setuser((prevUser) => ({
            ...prevUser,
            [name]: file,
        }));
    };
    
    
    

    const handleForm = async (e) => {
        e.preventDefault();
    
        // Validate required fields
        const requiredFields = ['newsletter_id', 'subject', 'top_banner', 'date', 'title', 'image', 'image_link', 'summary', 'description'];
        let hasError = false;
    
        requiredFields.forEach((field) => {
            if (!user[field]) {
                setError(prevError => ({ ...prevError, [field]: `${field} is required` }));
                hasError = true;
            }
        });
    
        if (hasError) return;
    
        try {
            const payload = {
                newsletter_id: user.newsletter_id,
                subject: user.subject,
                top_banner: user.top_banner,
                date: user.date,
                title: user.title,
                summary: user.summary,
                description: user.description,
                image: user.image,
                image_link: user.image_link,
                is_upcoming_events_date: user.is_upcoming_events_date,
                is_upcoming_events_time: user.is_upcoming_events_time,
                is_upcoming_events_location: user.is_upcoming_events_location,
                registration_link: user.registration_link,
                meeting_link: user.meeting_link,
            };

            await axios.post('/api/newsletter', payload, {
                headers: { 'Content-Type': 'multipart/form-data',
                }
            });
    
            toast.success(<div><strong>Form Submission Successful!</strong></div>);
    
            // Reset form after submission
            setuser({
                newsletter_id: '',
                subject: '',
                top_banner: null,
                date: '',
                title: '',
                image: null,
                image_link: '',
                summary: '',
                description: '',
                is_upcoming_events_date: '',
                is_upcoming_events_time: '',
                is_upcoming_events_location: '',
                registration_link: '',
                meeting_link: ''
            });
    
        } catch (error) {
            console.error('Error:', error);
            toast.error('An error occurred while submitting the form.');
        }
    };
    
    return (
        <>
            <Navbar />
            <div className="my-4 new_container rounded shadow">
                <div className="row">
                    <div className="card">  
                        <div className="card-body px-5">
                        <form onSubmit={handleForm}>
                            <div className="mb-2">
                                <div className="row g-2">
                                    <div className="col-sm-12">
                                        <small>Newsletter Id <span className="text-danger">*</span></small>
                                        <input
                                            type="text"
                                            className="form-control custom-reg-form"
                                            placeholder="Enter Newsletter Id (e.g., NL-YYYYMMDD)"
                                            name="newsletter_id"
                                            value={user.newsletter_id}
                                            onChange={handleChange}
                                        />
                                        {error.newsletter_id && <small className="text-danger">{error.newsletter_id}</small>}

                                    </div>

                                    <div className="col-sm-12">
                                        <small>Subject <span className="text-danger">*</span></small>
                                        <input
                                            type="text"
                                            className="form-control custom-reg-form"
                                            placeholder="Enter Subject (e.g., DHIS2MIS Nepal Update - Month Year)"
                                            name="subject"
                                            value={user.subject}
                                            onChange={handleChange}
                                        />
                                        {error.subject && <small className="text-danger">{error.subject}</small>}

                                    </div>
                                </div>
                            </div>

                            <div className="mb-2">
                                <div className="row g-2">
                                    <div className="col-sm-12">
                                        <small>Top Banner <span className="text-danger">*</span></small>
                                        <input
                                            type="file"
                                            className="form-control custom-reg-form"
                                            placeholder="Enter Top Banner URL"
                                            name="top_banner"
                                            onChange={handleFileChange}
                                        />
                                        {/* {user.top_banner && (
                                            <small className="text-success">Selected File: {user.top_banner}</small>
                                        )} */}
                                        {error.top_banner && <small className="text-danger">{error.top_banner}</small>}

                                    </div>

                                    <div className="col-sm-12">
                                        <small>Date <span className="text-danger">*</span></small>
                                        <input
                                            type="date"
                                            className="form-control custom-reg-form"
                                            name="date"
                                            value={user.date}
                                            onChange={handleChange}
                                        />
                                        {error.date && <small className="text-danger">{error.date}</small>}

                                    </div>
                                </div>
                            </div>

                            <div className="mb-2">
                                <div className="row g-2">
                                    <div className="col-sm-12">
                                        <small>Title <span className="text-danger">*</span></small>
                                        <input
                                            type="text"
                                            className="form-control custom-reg-form"
                                            placeholder="Enter Title (e.g., Update: Key Topic)"
                                            name="title"
                                            value={user.title}
                                            onChange={handleChange}
                                        />
                                        {error.title && <small className="text-danger">{error.title}</small>}

                                    </div>
                                    

                                    <div className="col-sm-12">
                                    <small>Image URL <span className="text-danger">*</span></small>
                                        <input
                                            type="file"
                                            className="form-control custom-reg-form"
                                            placeholder="Enter Image URL"
                                            name="image"
                                            onChange={handleFileChange}
                                        />
                                           {/* {user.image && (
                                            <small className="text-success">Selected File: {user.image}</small>
                                        )} */}
                                    {error.image && <small className="text-danger">{error.image}</small>}
                                    <div className="col-sm-12">
                                        <small>Image Link <span className="text-danger">*</span></small>
                                            <input
                                                type="text"
                                                className="form-control custom-reg-form"
                                                placeholder="Enter Image Link"
                                                name="image_link"
                                                value={user.image_link}
                                                onChange={handleChange}
                                             />
                                        {error.image_link && <small className="text-danger">{error.image_link}</small>}

                                    </div>
                                    
                                        
                                    </div>
                                </div>
                            </div>

                            <div className="mb-2">
                                <div className="row g-2">
                                    <div className="col-sm-12">
                                    <small>Summary <span className="text-danger">*</span></small>
                                        <textarea
                                            className="form-control custom-reg-form"
                                            placeholder="Enter Summary"
                                            name="summary"
                                            value={user.summary}
                                            onChange={handleChange}
                                        ></textarea>
                                    {error.summary && <small className="text-danger">{error.summary}</small>}

                                    </div>

                                    <div className="mb-2">
                                    <div className="row g-2">
                                        <div className="col-sm-12">
                                            <small>Description <span className="text-danger">*</span></small>
                                            <CKEditor
                                                editor={ClassicEditor}
                                                data={user.description}
                                                onChange={handleEditorChange}
                                            />                     
                                            {error.description && <small className="text-danger">{error.description}</small>}
                                        </div>
                                    </div>
                                </div>
                                  
                                </div>
                            </div>

                            <div className="mb-2">
                                <div className="row g-2">
                                   

                                    <div className="col-sm-12">
                                        <small>Upcoming Event Date</small>
                                        <input
                                            type="date"
                                            className="form-control custom-reg-form"
                                            name="is_upcoming_events_date"
                                            value={user.is_upcoming_events_date}
                                            onChange={handleChange}

                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="mb-2">
                                <div className="row g-2">
                                    <div className="col-sm-12">
                                        <small>Upcoming Event Time</small>
                                        <input
                                            type="time"
                                            className="form-control custom-reg-form"
                                            name="is_upcoming_events_time"
                                            value={user.is_upcoming_events_time}
                                            onChange={handleChange}

                                        />
                                    </div>

                                    <div className="col-sm-12">
                                        <small>Upcoming Event Location</small>
                                        <input
                                            type="text"
                                            className="form-control custom-reg-form"
                                            placeholder="Enter Event Location"
                                            name="is_upcoming_events_location"
                                            value={user.is_upcoming_events_location}
                                            onChange={handleChange}

                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="mb-2">
                                <div className="row g-2">
                                    <div className="col-sm-12">
                                        <small>Registration Link</small>
                                        <input
                                            type="text"
                                            className="form-control custom-reg-form"
                                            placeholder="Enter Registration Link"
                                            name="registration_link"
                                            value={user.registration_link}
                                            onChange={handleChange}

                                        />
                                    </div>

                                    <div className="col-sm-12">
                                        <small>Meeting Link</small>
                                        <input
                                            type="text"
                                            className="form-control custom-reg-form"
                                            placeholder="Enter Meeting Link"
                                            name="meeting_link"
                                            value={user.meeting_link}
                                            onChange={handleChange}

                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="text-center mt-3 w-100">
                                <button type="submit" className="btn btn-primary w-100">Submit</button>
                            </div>
                        </form>

                            
                            </div>

                        </div>
                    </div>  
            </div>
        </>
    );
}

export default Newsletter;