

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import erecordImg from '../assets/dhis2-app-icon.-erecord.png';
import eCardImg from '../assets/education.png';


const Gallery = () => {
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <>
            <section id="customization_process" className="my-5">
                <div className="overlay"></div>
                <div className="container pb-5">
                    <div className="text-center py-5" data-aos="fade-up" data-aos-upoffset="200">
                        <h3 className="heading-text">Dhis For</h3>
                        <hr className="w-25 m-auto" />
                    </div>

                    <div className="container img-fluid">
                        <div className="row" data-aos="fade-right" data-aos-upoffset="200">
                        <div className="col-sm-12 col-md-4 col-lg-3 col-12">
                                <div className="card">
                                    <div className="card-body text-center">
                                       <a href='https://www.health.dhis2mis.org/' target='_blank'> 
                                            <img src={erecordImg} className="img-fluid shadow" alt="" />
                                        </a>
                                        <h5 className="card-title mt-3 ">Health</h5>
                                    </div>
                                </div>                               
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-3 col-12">
                                <div className="card">
                                    <div className="card-body text-center">
                                       <a href='https://education.dhis2mis.org/' target='_blank'> 
                                            <img src={eCardImg} className="img-fluid shadow" alt="" />
                                        </a>
                                        <h5 className="card-title mt-3 " >Education</h5>
                                    </div>
                                </div>                               
                        </div>
                           
                           
                        </div>
                       
                     
    
                    </div>
                </div>
            </section>
        </>
    )
}

export default Gallery;