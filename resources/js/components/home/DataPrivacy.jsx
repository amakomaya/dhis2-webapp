import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Navbar2 from '../Registration/Navbar2.jsx';


const DataPrivacy = () => {
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <>
            <Navbar2 />

            <section id="system-use-terms" className="mt-5">
                <div className="text-center mb-5">
                    <h3 className="heading-text">Data Privacy Statement</h3>
                    <hr className="w-25 m-auto text-secondary" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-sm-12  col-12" data-aos="fade-right" data-aos-upoffset="200">
                            <div className="mb-4 text-secondary shadow rounded py-4 ps-4">
                                <h3 className="text-subheading" style={{color:"#000000"}}>1. Introduction</h3>
                                <p className='text'>
                                    Amakomaya Apps Pvt. Ltd. ("Company") is committed to protecting the privacy and security of our 
                                    clients' data. This Data Privacy Statement outlines how we collect, use, and protect your personal information when 
                                    you interact with us through our services, including our website, https://www.dhis2mis.org.
                                </p>
                                


                                <h3 className="text-subheading" style={{color:"#000000"}}>2. Our Commitment</h3>
                                <p className='text'>
                                    Amakomaya Apps Pvt. Ltd., located at Kathmandu - 2 Lazimpat, Shivabhakta Marga, 304 Nepal, is dedicated to providing robust 
                                    open-source software as a service (SaaS). We ensure that all personal information collected is handled with the highest 
                                    standards of security and confidentiality.
                                </p>

                                
                                <h3 className="text-subheading" style={{color:"#000000"}}>3. Information We Collect</h3>
                                <p className='text'>
                                    When you register for our DHIS2 SaaS application, we collect personal information necessary to provide our services. This may include:                                   
                                    <br/>Contact information (email address, phone number, etc.)
                                    <br/>Official information required for legal validation
                                    <br/>Use of Collected Information	
                                    <br/>The personal information we collect is used to:
                                    <br/>Process your registration and provide access to the DHIS2 SaaS application
                                    <br/>Customize our services to meet your requirements
                                    <br/>Inform you about new product features or other necessary information
                                    <br/>Ensure the security and operation of our systems
                                    <br/>We do not share your personal information with third parties for business purposes or any other reason unless required by law.
                                </p>
                                

                                <h3 className="text-subheading" style={{color:"#000000"}} >4. Data Security</h3>
                                <p className='text'>
                                    Amakomaya Apps Pvt. Ltd. takes data security seriously and implements industry-standard measures to protect your 
                                    personal information from unauthorized access, disclosure, alteration, or destruction.
                                </p>

                                <h3 className="text-subheading" style={{color:"#000000"}}>5. Trial Period and Data Responsibility</h3>
                                <p className='text'>
                                    During the trial period, no fees are charged, and Amakomaya Apps Pvt. Ltd. does not take responsibility for securing data. 
                                    Upon transitioning to a real-time purchasing account and completing the payment, we assume full responsibility for data security and system operation.
                                </p>

                                <h3 className="text-subheading" style={{color:"#000000"}}>6. Annual Maintenance Contracts (AMC)</h3>
                                <p className='text'>
                                    Our AMC services ensure that regular updates and security patches released by the HISP network are implemented. We offer two categories of AMC:
                                    SaaS with Full Infrastructure: Includes complete solutions, data storage, application hosting, and security.
                                    SaaS as Partial Infrastructure: Includes app and engine services, with data storage and security managed by the client.

                                </p>
                               

                                <h3 className="text-subheading" style={{color:"#000000"}}>7. Customization and Source Code Use</h3>
                                <p className='text'>
                                     We use the freely available source code of DHIS2 and customize the frontend graphical part as per client requirements. 
                                     Any changes to the core technology are pushed to the HISP at Oslo University for approval and shared through the master build.
                                </p>

                                <h3 className="text-subheading" style={{color:"#000000"}}>8. Changes to This Data Privacy Statement</h3>
                                <p className='text'>
                                    We reserve the right to modify this Data Privacy Statement at any time. We will notify you of any changes by posting the new 
                                    Data Privacy Statement on this page. Your continued use of our services after the changes are effective will constitute your acceptance of the revised statement.
                                </p>

                                <h3 className="text-subheading" style={{color:"#000000"}}>9. Contact Us</h3>
                                <p className='text'>
                                    If you have any questions or concerns about this Data Privacy Statement or our data practices, please contact us:
                                    <br/><br/>
                                        Amakomaya Apps Pvt. Ltd.
                                        <br/>
                                        Kathmandu - 2 Lazimpat, Shivabhakta Marga, 304
                                        Nepal<br/>
                                        Phone: 01-4528090<br/>
                                        Email: contact@dhis2mis.org <br/><br/>
                                        Thank you for trusting Amakomaya Apps Pvt. Ltd. with your personal information. We are committed to protecting your privacy and providing a secure and reliable service.

                                </p>
                                
                               
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </>
    )
}

export default DataPrivacy;