

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const CustomizeSection = () => {
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <>
            <section id="customization_process" className="my-5">
                <div className="overlay"></div>
                <div className="container pb-5">
                    <div className="text-center py-5" data-aos="fade-up" data-aos-upoffset="200">
                        <h3 className="heading-text">Customization Process</h3>
                        <hr className="w-25 m-auto" />
                    </div>

                    <div className="container img-fluid">
                        <div className="row" data-aos="fade-right" data-aos-upoffset="200">
                            <div className="col-sm-12 col-md-4 col-lg-3 col-12">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <i className="bi bi-pie-chart"></i>
                                        <h5 className="card-title mt-3">Custom Organization-based Survey</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4 col-lg-3 col-12">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <i className="bi bi-cloud-plus"></i>
                                        <h5 className="card-title mt-3">FHIR-based EMR Interoperability</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4 col-lg-3 col-12">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <i className="bi bi-h-circle"></i>
                                        <h5 className="card-title mt-3">Health Domain Expertise Available</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4 col-lg-3 col-12">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <i className="bi bi-journal-check"></i>
                                        <h5 className="card-title mt-3">Custom Organization-based Data Sets/Registers</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5" data-aos="fade-left" data-aos-upoffset="200">
                            <div className="col-sm-12 col-md-4 col-lg-3 col-12">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <i className="bi bi-display"></i>
                                        <h5 className="card-title mt-3">Custom Application (Online, Offline, Web, Mobile)</h5>
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

export default CustomizeSection;