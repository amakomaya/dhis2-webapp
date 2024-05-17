import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/logo_5.png";
const Navbar = () => {

    const [sticky, setSticky] = useState(false)
    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })
    }, []);

    return (
        <>
            <nav className={`navbar sticky-top navbar-expand-lg py-4 ${sticky ? 'dark-nav': ''}`}>
                <div className="container">
                    <div className="">
                        <Link to="/"><img src={logoImg} alt="Logo" height="50" className="d-inline-block align-top"/></Link>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
                            <li className="nav-item">
                                <a className="nav-link px-2" aria-current="page" href="#why">Why?</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-3" href="#plan">Plans</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-3" href="#customization_process">Customize</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-3" href="#products">Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-3" href="#faqs">FAQs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-3" href="#contact-us">Support</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;