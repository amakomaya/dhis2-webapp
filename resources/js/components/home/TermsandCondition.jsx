import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Navbar2 from '../Registration/Navbar2.jsx';


const TermsandCondition = () => {
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <>
            <Navbar2 />

            <section id="terms-conditions" className="mt-5">
                <div className="text-center mb-5">
                    <h3 className="heading-text">Terms & Conditions</h3>
                    <hr className="w-25 m-auto text-secondary" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-sm-12  col-12" data-aos="fade-right" data-aos-upoffset="200">
                            <div className="mb-4 text-secondary shadow rounded py-4 ps-4">
                                <h3 className="text-subheading" style={{color:"#000000"}}>1. Introduction</h3>
                                <p className='text'>
                                    Welcome to Amakomaya Apps Pvt. Ltd. ("Company"). These Terms and Conditions ("Terms and Conditions") govern 
                                    your relationship with Amakomaya Apps Pvt. Ltd. and your use of the website https://www.dhis2mis.org ("Service") 
                                    operated by Amakomaya Apps Pvt. Ltd.
                                </p>
                                <p className='text'>
                                    By accessing or using the Service, you agree to be bound by these Terms. 
                                    If you disagree with any part of the Terms, then you may not access the Service.
                                </p>


                                <h3 className="text-subheading" style={{color:"#000000"}}>2. Services Provided</h3>
                                <p className='text'>
                                    Amakomaya Apps Pvt. Ltd. is an innovative social enterprise providing robust open-source 
                                    software as a service (SaaS). We support our clients with high-quality, industry-standard 
                                    services in data, training, new technologies, consultancy, and research. 
                                    <br/>
                                    Our services include:
                                    <ul>
                                        <li>Design and customization of software products tailored to client requirements.</li>
                                        <li>Offering freedom from vendor lock-in, allowing clients to select their software technology service provider.</li>
                                        <li>Utilizing the DHIS2 platform for recording, reporting, and managing electronic information.</li>
                                    </ul>
                                </p>

                                
                                <h3 className="text-subheading" style={{color:"#000000"}}>3. DHIS2 Platform</h3>
                                <p className='text'>
                                    DHIS2 is the world’s largest global open-source health information management system, developed 
                                    by the HISP Centre at the University of Oslo (UiO). It is used in more than 80 countries for health 
                                    data collection and analysis and is offered free of charge as a global public good.
                                </p>
                                <p className='text'>
                                    Amakomaya Apps Pvt. Ltd. provides DHIS2 as a SaaS platform, customizing it according to client 
                                    requirements. Customization is charged based on the required skill set and time to complete the tasks. 
                                    We also offer annual maintenance contracts (AMC) to manage regular updates and security patches released
                                     by the HISP network.
                                     <br/><br/>
                                     Annual Maintenance Contract (AMC) Categories:
                                     <ol type='i'>
                                        <li>Software as a Service (SaaS) with full infrastructure: Includes complete solutions, data storage, application hosting, and security. </li>
                                        <li>Software as a Service (SaaS) as partial infrastructure: Includes app and engine services, with data storage and security managed by the client.</li>
                                     </ol>

                                </p>

                                <h3 className="text-subheading" style={{color:"#000000"}}>4. Registration and Trial Period</h3>
                                <p className='text'>
                                    Clients can register their personal information at https://www.dhis2mis.org to apply for the DHIS2 SaaS application. 
                                    A trial period is available during which no fee is charged, and we do not take responsibility for data security 
                                    during trial period. After the trial period, if clients want to continue the services should proceed to purchase a 
                                    real-time account and pay in advance via an online payment gateway.
                                </p>

                                <h3 className="text-subheading" style={{color:"#000000"}}>5. Payment and Legal Provisions</h3>
                                <p className='text'>
                                    To purchase customization service and AMC, clients must provide official information for legal
                                    validation and make the necessary payments. Once the payment is received, Amakomaya Apps Pvt. Ltd.
                                    assumes full responsibility for data security and system operation.
                                </p>

                                <h3 className="text-subheading" style={{color:"#000000"}}>6. Data Usage and Privacy</h3>
                                <p className='text'>
                                    Amakomaya Apps Pvt. Ltd. respects client data privacy and will not share any received data with third parties or 
                                    use it for business purposes other than: 
                                </p>
                                <p className='text'>
                                    Informing clients about new product features or necessary information.
                                </p>

                                <h3 className="text-subheading" style={{color:"#000000"}}>7. Source Code and Customization</h3>
                                <p className='text'>
                                    Amakomaya Apps Pvt. Ltd. only uses the DHIS2 source code, which is freely available, for customization. 
                                    Customization focuses on the frontend graphical part, and any changes in core technology will be pushed to 
                                    the HISP at Oslo University for approval before being shared through the master build.
                                </p>

                                <h3 className="text-subheading" style={{color:"#000000"}}>8. Liability and Indemnity</h3>
                                <p className='text'>
                                    Amakomaya Apps Pvt. Ltd. will not be liable for any data security issues during the trial period. 
                                    After purchasing a real-time account, we take full responsibility for data security and system operation. 
                                    Clients agree to indemnify and hold Amakomaya Apps Pvt. Ltd. harmless from any claims arising out of their use of our services.
                                </p>

                                <h3 className="text-subheading" style={{color:"#000000"}}>9. Changes to Terms</h3>
                                <p className='text'>
                                    We reserve the right to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on this page. 
                                    By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised Terms.
                                </p>

                                <h3 className="text-subheading" style={{color:"#000000"}}>10. Contact Us</h3>
                                <p className='text'>
                                    If you have any questions about these Terms, please contact us:
                                    <br/><br/>
                                        Amakomaya Apps Pvt. Ltd.
                                        <br/>
                                        Kathmandu - 2 Lazimpat, Shivabhakta Marga, 304
                                        Nepal<br/>
                                        Phone: 01-4528090<br/>
                                        Email: contact@dhis2mis.org <br/><br/>

                                        Thank you for choosing Amakomaya Apps Pvt. Ltd. for your software needs. We look forward to serving you.
                                        
                                        <br/><br/>
                                        By using the Service, you acknowledge that you have read, understood, and agreed to be bound by these Terms and Conditions.


                                </p>
                                
                               
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </>
    )
}

export default TermsandCondition;