


import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import dhisImage from '../assets/dhis_version41.png';
import erecordPrograms from '../assets/erecordPrograms.png';
import dhisOverview from '../assets/dhisOverview.png';
import erecordEnrollment from '../assets/erecordEnrollment.png';
import nutrition from '../assets/nutrition.png';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/Image4.png';
import image5 from '../assets/Image5.png';
import image6 from '../assets/Image6.png';
import image7 from '../assets/Image7.png';
import image8 from '../assets/Image8.png';
import image9 from '../assets/image9.jpeg';
import image10 from '../assets/image10.jpeg';
import periodSelector from '../assets/periodSelector.png';
import apps from '../assets/apps.png';

const Gallery = () => {
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <>
            <section id="products" className="my-5">
                <div className="container pb-5">
                    <div className="text-center py-5" data-aos="fade-up" data-aos-upoffset="200">
            
                    </div>

                    <div className="container img-fluid">
                        <div className="row" data-aos="fade-right" data-aos-upoffset="200">
                        <div className="col-sm-12 col-md-3 col-lg-3 col-12">
                                <div className="card">
                                <img src={dhisImage} className="img-fluid shadow" alt=""  />
                                </div>
                        </div>
                        <div className="col-sm-12 col-md-3 col-lg-3 col-12">
                                <div className="card">
                                <img src={dhisOverview} className="img-fluid shadow" alt="" />

                                </div>
                            </div>
                            <div className="col-sm-12 col-md-3 col-lg-3 col-12">
                                <div className="card">
                                    <img src={erecordPrograms} className="img-fluid shadow" alt="" />

                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4 col-lg-3 col-12">
                                <div className="card">
                                <img src={erecordEnrollment} className="img-fluid shadow" alt="" />

                                </div>
                            </div>

                            
                        </div>
                        <div className="row mt-5" data-aos="fade-left" data-aos-upoffset="200">
                            <div className="col-sm-12 col-md-4 col-lg-3 col-12">
                                <div className="card">
                                <img src={nutrition} className="img-fluid shadow" alt="" />
                            </div>
                           
                            
                            </div>

                            <div className="col-sm-12 col-md-4 col-lg-3 col-12">
                                <div className="card">
                                <img src={image8} className="img-fluid shadow" alt="" />
                                </div>
                           </div>

                           <div className="col-sm-12 col-md-4 col-lg-3 col-12">
                                <div className="card">
                                <img src={periodSelector} className="img-fluid shadow" alt="" />
                                </div>
                           </div>

                           <div className="col-sm-12 col-md-4 col-lg-3 col-12">
                                <div className="card">
                                <img src={apps} className="img-fluid shadow" alt="" />
                                </div>
                           </div>
                           
                           <div className="row mt-5" data-aos="fade-left" data-aos-upoffset="200">
                          
                          <div className="col-sm-12 col-md-1 col-lg-1 col-12">
                              <img src={image1} className="img-fluid shadow" alt="" style={{width:'100px', height:'auto'}} />

                                  
                          </div>
                          <div className="col-sm-12 col-md-1 col-lg-1 col-12">
                                  <img src={image2} className="img-fluid shadow" alt="" style={{width:'100px', height:'auto'}} />
                                  
                          </div>
                          <div className="col-sm-12 col-md-1 col-lg-1 col-12">
                                  <img src={image3} className="img-fluid shadow" alt=""style={{width:'100px', height:'auto'}}  />
                          </div>
                          <div className="col-sm-12 col-md-1 col-lg-1 col-12">
                                  <img src={image4} className="img-fluid shadow" alt="" style={{width:'100px', height:'auto'}} />
                          </div>
                          <div className="col-sm-12 col-md-1 col-lg-1 col-12">
                                  <img src={image5} className="img-fluid shadow" alt="" style={{width:'100px', height:'auto'}} />
                          </div>
                          <div className="col-sm-12 col-md-1 col-lg-1 col-12">
                                  <img src={image6} className="img-fluid shadow" alt=""style={{width:'100px', height:'auto'}}  />
                          </div>
                          <div className="col-sm-12 col-md-1 col-lg-1 col-12">
                                  <img src={image7} className="img-fluid shadow" alt="" style={{width:'100px', height:'auto'}} />
                          </div>
                          <div className="col-sm-12 col-md-1 col-lg-1 col-12">
                                  <img src={image9} className="img-fluid shadow" alt="" style={{width:'100px', height:'auto'}} />
                          </div>
                          <div className="col-sm-12 col-md-1 col-lg-1 col-12">
                                  <img src={image10} className="img-fluid shadow" alt="" style={{width:'100px', height:'auto'}} />
                          </div>
                      </div>

                        </div>                        
                    </div>

                    

                    
                </div>
            </section>
        </>
    )
}

export default Gallery ;