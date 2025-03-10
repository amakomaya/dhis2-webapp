

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import erecordImg from '../assets/dhis2-app-icon.-erecord.png';
import eCardImg from '../assets/dhis_eCard_logo.png';



const Products = () => {
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <>
            <section id="products" className="my-5">
                {/* <div className="overlay"></div> */}
                <div className="container pb-5">
                    <div className="text-center py-5" data-aos="fade-up" data-aos-upoffset="200">
                        <h3 className="heading-text">Our Projects</h3>
                        <hr className="w-25 m-auto" />
                    </div>

                    <div className="container img-fluid">
                        <div className="row" data-aos="fade-right" data-aos-upoffset="200">
                            <div className="col-sm-12 col-md-4 col-lg-3 col-12">
                                <div className="card">
                                    <div className="card-body text-center">
                                        {/* <i className="bi bi-pie-chart"></i> */}
                                       <a href='https://community.dhis2mis.org/d/2-access-the-demo-dhis2-hmis-tools' target='_blank'> 
                                            <img src={erecordImg} className="img-fluid shadow" alt="" />
                                        </a>
                                        <h5 className="card-title mt-3 " >EHMIS</h5>


                                    </div>
                                </div>

                                
                            </div>
                            <div className="col-sm-12 col-md-4 col-lg-3 col-12">
                                <div className="card">
                                    <div className="card-body text-center">
                                        {/* <i className="bi bi-pie-chart"></i> */}
                                       <a href='https://community.dhis2mis.org/d/2-access-the-demo-dhis2-hmis-tools' target='_blank'> 
                                            <img src={eCardImg} className="img-fluid shadow" alt="" />
                                        </a>
                                        <h5 className="card-title mt-3 " >ECARD</h5>


                                    </div>
                                </div>

                                
                            </div>

                            <div className="col-sm-12 col-md-4 col-lg-3 col-12">
                                <div className="card">
                                    <div className="card-body text-center">
                                        {/* <i className="bi bi-pie-chart"></i> */}
                                       {/* <a href='https://community.dhis2mis.org/d/2-access-the-demo-dhis2-hmis-tools' target='_blank'> 
                                            <img src={eCardImg} className="img-fluid shadow" alt="" />
                                        </a> */}
                                        <a href='https://community.dhis2mis.org/d/2-access-the-demo-dhis2-hmis-tools' target='_blank'> 
                                            <h4>Tracker to Aggregate 
                                            <br/>
                                            <br/>
                                            AD to BS</h4>

                                        </a>
                                        
                                        <h5 className="card-title mt-3 " >DATA EXCHANGE</h5>


                                    </div>
                                </div>

                                
                            </div>
                            {/* <div className="col-sm-12 col-md-4 col-lg-3 col-12">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <i className="bi bi-cloud-plus"></i>
                                        <h5 className="card-title mt-3">Instances</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4 col-lg-3 col-12">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <i className="bi bi-h-circle"></i>
                                        <h5 className="card-title mt-3">product1</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4 col-lg-3 col-12">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <i className="bi bi-journal-check"></i>
                                        <h5 className="card-title mt-3">product2</h5>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        {/* <div className="row mt-5" data-aos="fade-left" data-aos-upoffset="200">
                            <div className="col-sm-12 col-md-4 col-lg-3 col-12">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <i className="bi bi-display"></i>
                                        <h5 className="card-title mt-3">Custom Application (Online, Offline, Web, Mobile)</h5>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default Products;