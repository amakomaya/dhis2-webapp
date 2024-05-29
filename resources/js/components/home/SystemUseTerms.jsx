import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Navbar2 from '../Registration/Navbar2.jsx';


const SystemUseTerms = () => {
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <>
            <Navbar2 />

            <section id="system-use-terms" className="mt-5">
                <div className="text-center mb-5">
                    <h3 className="heading-text">System Use Terms</h3>
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


                                <h3 className="text-subheading" style={{color:"#000000"}}>2. Company Overview</h3>
                                <p className='text'>
                                    Amakomaya Apps Pvt. Ltd., located at Kathmandu - 2 Lazimpat, Shivabhakta Marga, 304 Nepal, is an innovative social enterprise that provides 
                                    robust open-source software as a service (SaaS). We offer high-quality, industry-standard services in data, training, new technologies, 
                                    consultancy, and research. Our products are designed with client requirements in mind, using the best tools and methods. We ensure freedom from vendor 
                                    lock-in, allowing clients to choose their software technology service provider freely.
                                </p>

                                
                                <h3 className="text-subheading" style={{color:"#000000"}}>3. DHIS2 Platform</h3>
                                <p className='text'>
                                    The DHIS2 platform is the world’s largest global open-source health information management system, developed by the HISP 
                                    Centre at the University of Oslo (UiO). It is used in more than 80 countries for health data collection and analysis
                                    and is offered free of charge as a global public good.
                                </p>
                                

                                <h3 className="text-subheading" style={{color:"#000000"}}>4. Services Provided</h3>
                                <p className='text'>
                                    Amakomaya Apps Pvt. Ltd. provides DHIS2 as a SaaS platform to clients. Our services include: <br/> <br/>
                                    Requirement Analysis: We gather requirements from clients and develop a complete logical information flow diagram.<br/> <br/>
                                    Customization: Upon client confirmation, we customize the DHIS2 platform, focusing on the frontend graphical part. 
                                    Customization is charged based on the required skill set and time to complete the tasks.<br/> <br/>
                                    Annual Maintenance Contracts (AMC): We perform regular updates and security patches as released by the HISP network. The AMC is categorized as:

                                <br/><br/>
                                   <span style={{textDecoration:'underline'}}>SaaS with Full Infrastructure:</span> SaaS with Full Infrastructure: Includes complete solutions, data storage, application hosting, and security.
                                   <br/>
                                    <span style={{textDecoration:'underline'}}>SaaS as Partial Infrastructure:</span> Includes app and engine services, with data storage and security managed by the client.


                                </p>

                                <h3 className="text-subheading" style={{color:"#000000"}}>5. Source Code and Customization</h3>
                                <p className='text'>
                                    Amakomaya Apps Pvt. Ltd. uses the freely available DHIS2 source code and customizes the frontend graphical part. 
                                    Core technology changes are pushed to the HISP at Oslo University for approval and shared through the master build.
                                </p>

                                <h3 className="text-subheading" style={{color:"#000000"}}>6. Registration and Trial Period</h3>
                                <p className='text'>
                                    Clients can register their personal information at https://www.dhis2mis.org to apply for the DHIS2 SaaS application. 
                                    A trial period is available during which no fee is charged, and we do not take responsibility for data security.
                                    After the trial period, clients have alternatives either disconnect from the system or continue by purchasing AMC service account and pay in advance via an online payment gateway.
                                </p>
                               

                                <h3 className="text-subheading" style={{color:"#000000"}}>7. Payment and Legal Provisions</h3>
                                <p className='text'>
                                    After completing the trial period, if clients desire to continue the live service should provide official information for 
                                    legal validation and make the necessary payments. Once payment is received, Amakomaya Apps Pvt. Ltd. assumes full responsibility 
                                    for data security and system operation.
                                </p>

                                <h3 className="text-subheading" style={{color:"#000000"}}>8. Data Usage and Privacy</h3>
                                <p className='text'>
                                    Amakomaya Apps Pvt. Ltd. respects client data privacy and will not share any received data with third parties or 
                                    use it for business purposes other than informing clients about new product features or necessary information.
                                </p>

                                <h3 className="text-subheading" style={{color:"#000000"}}>9. Liability and Indemnity</h3>
                                <p className='text'>
                                    Amakomaya Apps Pvt. Ltd. will not be liable for any data security issues during the trial period. 
                                    After purchasing a real-time account, we take full responsibility for data security and system operation. Clients agree to indemnify and hold Amakomaya Apps Pvt. Ltd. harmless from any claims arising out of their use of our services.
                                </p>

                                <h3 className="text-subheading" style={{color:"#000000"}}>10. Changes to Terms</h3>
                                <p className='text'>
                                    We reserve the right to modify or replace these Terms at any time. 
                                    We will provide notice of any changes by posting the new Terms on this page.
                                    By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised Terms.
                                </p>

                                <h3 className="text-subheading" style={{color:"#000000"}}>11. Contact Us</h3>
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
                                        By using the Service, you acknowledge that you have read, understood, and agreed to be bound by these System Use Terms.


                                </p>
                                
                               
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </>
    )
}

export default SystemUseTerms;