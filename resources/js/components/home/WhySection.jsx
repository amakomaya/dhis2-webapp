
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import dashboardImg from '../assets/dashboard2.png';
const WhySection = () => {
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <>
            <section id="why" className="py-5">
                <div className="text-center mb-5" data-aos="fade-up" data-aos-upoffset="200">
                    <h3 className="heading-text">Why DHIS2 ?</h3>
                    <hr className="w-25 m-auto text-secondary" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6 col-12" data-aos="fade-right" data-aos-upoffset="200">
                            <img src={dashboardImg} className="img-fluid shadow" alt="" />
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-6 col-12" data-aos="fade-left" data-aos-upoffset="200">

                            <div className="row">
                                <div className="col-md-2 text-center pt-5">
                                    <div className="text-primary fs-1"><i className="bi bi-patch-check-fill"></i></div>
                                </div>
                                <div className="col-md-10 pt-3 ">
                                    <h3>Unlock The Potential of DHIS2 Instantly</h3>
                                    <p>Unleash the full power of DHIS2 effortlessly, gaining instant access to a robust
                                        health
                                        management information system. </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-2 text-center pt-5">
                                    <div className="text-primary fs-1"><i className="bi bi-patch-check-fill"></i></div>
                                </div>
                                <div className="col-md-10 pt-3">
                                    <h3>DHIS2: A Powerful Data Tool</h3>
                                    <p>DHIS2 Stands as powerful tool designed for the
                                        collection, validation, analysis & presentation of data. </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-2 text-center pt-5">
                                    <div className="text-primary fs-1"><i className="bi bi-patch-check-fill"></i></div>
                                </div>
                                <div className="col-md-10 pt-3">
                                    <h3>Data Management Solution for HMIS</h3>
                                    <p>Introducing Data Management Solution for HMIS.
                                        Nepal using DHIS2; where you can
                                        effortlesly establish your DHIS2
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default WhySection