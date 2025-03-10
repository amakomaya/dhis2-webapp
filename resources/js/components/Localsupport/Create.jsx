// Import Libraries
import React, {useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Registration/Registration.css';
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import templateFile from '../assets/Health_facility_details.xlsx';
import pdfTemplate from '../assets/sample-letter-for-local-bodies.pdf';

function Create() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    const [userr, setUserr] = useState({
        fmname: '',
        lname: '',
        phone: '',
        otp: '',
        wordno: '',
        tole: '',
        selectedProvince: '',
        selectedDistrict: '',
        selectedMunicipality: '',
        email: '',
        letter:null,
        details:null
    })

    const [error, setError] = useState({
        fmname: '',
        lname: '',
        otp: '',
        province_type: '',
        district_type: '',
        municipality_type: '',
        wordno: '',
        tole: '',
        email: '',
        letter:null,
        details:null
    })

    const validateFmname = (fmname) => {
        const fmnameRegex = /^[A-Za-z ]+$/;
        return fmnameRegex.test(fmname)
    }

    const validateLname = (Lname) => {
        const lnameRegex = /^[A-Za-z ]+$/;
        return lnameRegex.test(Lname)
    }

    const validateWordno = (wordno) => {
        const wordnoRegex = /^\d+$/;
        return wordnoRegex.test(wordno)
    }

    const validateTole = (tole) => {
        const toleRegex = /^[A-Za-z ]+$/;
        return toleRegex.test(tole)
    }

    const validatePhone = (phone) => {
        const phoneRegex = /^9\d{9}$/;
        return phoneRegex.test(phone)
    }
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };


    const handleInputChange = (e) => {
        const { name, value, files } = e.target;

        setUserr((prevUserr) => ({
            ...prevUserr,
            [name]: files ? files[0] : value
        }));

        setError((prevError) => ({
            ...prevError,
            [name]: ''
        }));
    };
    
    
    const handleForm = (e) => {
        // setStatus(true)
        e.preventDefault();
        if (!validateFmname(userr.fmname)) {
            setError((preError) => ({ ...preError, fmname: 'Invalid First and Middle Name' }))
            return;
        }

        if (!validateLname(userr.lname)) {
            setError((preError) => ({ ...preError, lname: 'Invalid Last Name' }))
            return;
        }

        if (userr.selectedProvince === '') {
            setError((prevErrors) => ({ ...prevErrors, province_type: 'Province is required' }));
            return;
        }
        if (userr.selectedDistrict === '') {
            setError((prevErrors) => ({ ...prevErrors, district_type: 'District is required' }));
            return;
        }
        if (userr.selectedMunicipality === '') {
            setError((prevErrors) => ({ ...prevErrors, municipality_type: 'Municipality is required' }));
            return;
        }

        if (userr.letter === '') {
            setError((prevErrors) => ({ ...prevErrors, letter: 'Letter from is required' }));
            return;
        }
        
        if (userr.details === '') {
            setError((prevErrors) => ({ ...prevErrors, details: 'Health facility details is required' }));
            return;
        }

        if (!validateWordno(userr.wordno)) {
            setError((preError) => ({ ...preError, wordno: 'Invalid Word No' }))
            return;
        }

        if (!validateTole(userr.tole)) {
            setError((preError) => ({ ...preError, tole: 'Invalid tole' }))
            return;
        }

        if (!validatePhone(userr.phone)) {
            setError((preError) => ({ ...preError, phone: 'Invalid Phone number' }))
            alert('Invalid Phone number')
            return;
        }

        if (!validateEmail(userr.email)) {
            setError((preError) => ({ ...preError, email: 'Invalid email address' }));
            return;
        }

        if (userr.details&& userr.details.type !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
            setError((prevErrors) => ({ ...prevErrors, details: 'Please upload a valid xlsx file' }));
            return;
        }
    
        if (userr.letter && userr.letter.type !== 'application/pdf') {
            setError((prevErrors) => ({ ...prevErrors, letter: 'Please upload a valid pdf file' }));
            return;
        }
    
        try {

            var payload={}
            payload.fmname= userr.fmname,
            payload.lname= userr.lname,
            payload.province_id= userr.selectedProvince,
            payload.district_id= userr.selectedDistrict,
            payload.municipality_id= userr.selectedDistrict,
            payload.wardno= userr.wordno,
            payload.tole= userr.tole,
            payload.phone= userr.phone,
            payload.email=userr.email,
            payload.letter= userr.letter,
            payload.hfdetails= userr.details,


            
            axios.post('api/local-support/create',payload, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            })
            .then(response => {
              
                if (response.status === 200) {
                    toast.success(
                        <div>
                            <strong>Form Submission Confirmation:Stay Tuned for Updates!</strong><br/><br/>
                            <p> Thank you for completing the form. We have received your request and will be in touch shortly. Have a great day!</p>
                        </div>
                    );
                    setUserr({
                        fmname: '',
                        lname: '',
                        selectedProvince: '',
                        selectedDistrict: '',
                        selectedMunicipality: '',
                        wordno: '',
                        tole: '',
                        phone: '',
                        email: '',
                        letter:'',
                        hfdetails:'null'
                    })
            
                    setError({
                        fmname: '',
                        lname: '',
                        province_type: '',
                        district_type: '',
                        municipality_type: '',
                        wordno: '',
                        tole: '',
                        phone: '',
                        email: '',
                        letter:'',
                        hfdetails:''
                    })
                }
               
                 else {
                    console.error('Failed to send email');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
            
        } catch (error) {
            console.error('Error:', error);
            toast.error('An error occurred while submitting the form. Please try again later.');
        }
    }
    // -----------------------------------


    const [provinces, setProvinces] = useState([]);
    const [districtsByProvince, setDistrictsByProvince] = useState([]);
    const [municipalitiesByDistrict, setMunicipalitiesByDistrict] = useState([]);

    useEffect(() => {
        axios.get('api/provinces')
            .then(response => {
                setProvinces(response.data);
            })
            .catch(error => {
                console.error('Error fetching provinces:', error);
            });
    }, []);

    const handleProvinceChange = (e) => {
        const provinceId = parseInt(e.target.value, 10);
        setUserr(prevUserr => ({
            ...prevUserr,
            selectedProvince: provinceId,
            selectedDistrict: '', 
            selectedMunicipality: ''
        }));
        axios.get(`api/districts/${provinceId}`)
            .then(response => {
                setDistrictsByProvince(response.data);
            })
            .catch(error => {
                console.error('Error fetching districts:', error);
            });
    };

        
    const handleDistrictChange = (e) => {
        const districtId = e.target.value;
        setUserr(prevUserr => ({
            ...prevUserr,
            selectedDistrict: districtId,
            selectedMunicipality: ''
        }));
        axios.get(`api/municipalities/${districtId}`)
            .then(response => {
                setMunicipalitiesByDistrict(response.data);
            })
            .catch(error => {
                console.error('Error fetching municipalities:', error);
            });
    };
    const downloadSampleFile = () => {
        const link = document.createElement('a');
        link.href = templateFile;
        link.download = 'Health_facility_details.xlsx';
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const downloadPdfSampleFile = () => {
        fetch(pdfTemplate)
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(new Blob([blob]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'sample-letter-for-local-bodies.pdf');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        })
        .catch(error => console.error('Error downloading PDF:', error));
    };
    


    return (
        <>
            <Navbar />
            <div className="my-4 new_container rounded shadow">
                <div className="row">
                    <div className="card">
                        <div className="card-body px-5">
                            <h2 className="cart-title text-center text-primary fw-bold  pb-2"></h2>
                            <form onSubmit={handleForm} className=''>
                                <div className="mb-2">
                                    
                                <div className="d-flex justify-content-end mb-3">
                                    <button className="btn btn-primary me-2" onClick={downloadPdfSampleFile}>Sample letter</button>
                                    <button className="btn btn-primary" onClick={downloadSampleFile}>Sample details </button>
                                 </div>

                                    <div className="row g-2">
                                        {/* First and Middle name */}
                                        <div className="col-sm-12">
                                            <small>Responsible Person's Name <span className="text-danger">*</span></small>
                                            <input
                                                type="text"
                                                className={`form-control custom-reg-form ${error.fmname ? 'is-invalid' : ''}`}
                                                placeholder='Enter first and middle name'
                                                name='fmname' value={userr.fmname}
                                                onChange={handleInputChange}
                                            />
                                            {error.fmname && <div id="name-error" className="invalid-feedback">{error.fmname}</div>}
                                        </div>

                                        {/* Last name */}
                                        <div className="col-sm-12">
                                            <small>Responsible Person's Last Name <span className="text-danger">*</span></small>
                                            <input
                                                type="text"
                                                className={`form-control custom-reg-form ${error.lname ? 'is-invalid' : ''}`}
                                                placeholder='Enter last name'
                                                name='lname' value={userr.lname}
                                                onChange={handleInputChange}
                                            />
                                            {error.lname && <div id="name-error" className="invalid-feedback">{error.lname}</div>}
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-2">
                                    <div className="row g-2">
                                        {/* Province */}
                                        <div className="col-sm-6">
                                            <small>Province <span className="text-danger">*</span></small>
                                            <select
                                                className={`form-select custom-reg-form ${error.province_type ? 'is-invalid' : ''}`}
                                                name="province_type"
                                                aria-label="Province"
                                                onChange={handleProvinceChange}
                                                value={userr.selectedProvince}
                                            >
                                                <option selected>
                                                    Select province
                                                </option>
                                                {provinces.map((province) => (
                                                    <option key={province.id} value={province.id}>
                                                        {province.province_name}
                                                    </option>
                                                ))}
                                            </select>
                                            {error.province_type && (
                                                <div className="invalid-feedback">{error.province_type}</div>
                                            )}
                                        </div>

                                        {/* District */}
                                        <div className="col-sm-6">
                                            <small>District <span className="text-danger">*</span></small>
                                            <select
                                                className={`form-select custom-reg-form ${error.district_type ? 'is-invalid' : ''}`}
                                                name="district_type"
                                                aria-label="District"
                                                onChange={handleDistrictChange}
                                                value={userr.selectedDistrict}
                                            >
                                                <option selected>
                                                    Select District
                                                </option>
                                                {districtsByProvince.map((district) => (
                                                    <option key={district.id} value={district.id}>
                                                        {district.district_name}
                                                    </option>
                                                ))}
                                            </select>
                                            {error.district_type && (
                                                <div className="invalid-feedback">{error.district_type}</div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-2">
                                    <div className="row g-2">
                                        {/* Municipality */}
                                        <div className="col-sm-6">
                                            <small>Municipality <span className="text-danger">*</span></small>
                                            <select
                                                className={`form-select custom-reg-form ${error.municipality_type ? 'is-invalid' : ''}`}
                                                name="municipality_type"
                                                aria-label="Municipality"
                                                onChange={(e) => {
                                                    setUserr(prevUserr => ({ ...prevUserr, selectedMunicipality: e.target.value }));
                                                    setError((prevErrors) => ({ ...prevErrors, municipality_type: '' }));
                                                }}
                                                value={userr.selectedMunicipality}
                                            >
                                                <option selected>
                                                    Select Municipality
                                                </option>
                                                {municipalitiesByDistrict.map((municipality) => (
                                                    <option key={municipality.id} value={municipality.id}>
                                                        {municipality.municipality_name}
                                                    </option>
                                                ))}
                                            </select>
                                            {error.municipality_type && (
                                                <div className="invalid-feedback">{error.municipality_type}</div>
                                            )}
                                        </div>
                                        {/* Word no */}
                                        <div className="col-sm-6">
                                            <small>Ward No <span className="text-danger">*</span></small>
                                            <input
                                                type="text"
                                                className={`form-control custom-reg-form ${error.wordno ? 'is-invalid' : ''}`}
                                                placeholder='Enter Ward no'
                                                name='wordno' value={userr.wordno}
                                                onChange={handleInputChange}
                                            />
                                            {error.wordno && <div id="name-error" className="invalid-feedback">{error.wordno}</div>}
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-2">
                                    <div className="row g-2">
                                        {/* Tole */}
                                        <div className="col-md-12">
                                            <small>Tole <span className="text-danger">*</span></small>
                                            <input
                                                type="text"
                                                name="tole"
                                                className={`form-control custom-reg-form ${error.tole ? 'is-invalid' : ''}`}
                                                placeholder='Enter Tole'  value={userr.tole}
                                                onChange={handleInputChange}
                                            />
                                            {error.tole && <div id="name-error" className="invalid-feedback">{error.tole}</div>}
                                        </div>

                                    </div>
                                </div>

                                <div className="mb-2">
                                    <div className="row g-2">
                                        <div className="col-md-12">
                                            <small>Phone <span className="text-danger">*</span></small>
                                          
                                                <input
                                                    type="text"
                                                    className={`form-control custom-reg-form ${error.phone ? 'is-invalid' : ''}`}
                                                    placeholder='9xxxxxxxxx'
                                                    name='phone' value={userr.phone}
                                                    onChange={handleInputChange}
                                                /> 
                                                
                                        
                                            {error.phone && <div id="name-error" className="invalid-feedback">{error.phone}</div>}
                                        </div>
                                    </div>
                                </div>

                                
                                <div className="mb-2">
                                    <div className="row g-2">
                                        {/* Tole */}
                                        <div className="col-md-12">
                                            <small>Email <span className="text-danger">*</span></small>
                                            <input
                                                type="text"
                                                name="email"
                                                className={`form-control custom-reg-form ${error.email ? 'is-invalid' : ''}`}
                                                placeholder='Enter your email'  value={userr.email}
                                                onChange={handleInputChange}
                                            />
                                            {error.email && <div id="name-error" className="invalid-feedback">{error.email}</div>}
                                        </div>

                                    </div>
                                </div>


                                <div className="mb-2">
                                    <div className="row g-2">
                                        <div className="col-md-12">
                                            <small>Letter from LLG <span className="text-danger">*(Please upload only pdf file)</span></small>
                                            <input
                                                type="file"
                                                name="letter"
                                                className={`form-control custom-reg-form ${error.letter ? 'is-invalid' : ''}`}
                                                accept=".pdf"
                                                onChange={handleInputChange}
                                            />
                                            {error.letter && <div id="name-error" className="invalid-feedback">{error.letter}</div>}
                                        </div>

                                    </div>
                                </div>

                                <div className="mb-2">
                                    <div className="row g-2">
                                        <div className="col-md-12">
                                            <small>Health facility details <span className="text-danger">*(Please upload only xlsx file)</span></small>
                                            <input
                                                type="file"
                                                name="details"
                                                accept=".xlsx"
                                                className={`form-control custom-reg-form ${error.details ? 'is-invalid' : ''}`}
                                                onChange={handleInputChange}
                                            />
                                            {error.details && <div id="name-error" className="invalid-feedback">{error.details}</div>}
                                        </div>

                                    </div>
                                </div>

                                <div className="mb-4 text-center">
                                    {
                                       
                                            <div>
                                                <button type="submit" className="btn btn-primary btn-design mt-3">Submit</button>
                                            </div>
                                    }
                                </div>
                            </form>

                          
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Create;