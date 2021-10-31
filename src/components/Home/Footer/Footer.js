import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
// import FooterLink from './FooterLink';


const Footer = () => {
    return (
        <footer className="bg-dark py-5">
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center text-white">
                    <div className="col-md-3">
                        <h4>About Us</h4>
                        <p>Adventure Travel Company ltd provides comprehensive top class services to the client, offers Popular destination and performs world tour and Relaxation!</p>
                    </div>
                    <div className="col-md-3 ">
                        <h4>Explore</h4>
                        <div>
                            <h6>Package</h6>
                            <h6>Hotels</h6>
                            <h6>Popular Destination</h6>
                            <h6>Vacation Package</h6>
                        </div>
                    </div>
                    <div className="col-md-3 ">
                        <h4>Help</h4>
                        <div>
                            <h6>Contact Us</h6>
                            <h6>Privacy Policy</h6>
                            <h6>Legal Notice</h6>
                            <h6>Accessibility</h6>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <FontAwesomeIcon icon={faMapMarkerAlt} style={{ fontSize: '40px' }} />
                        <p className="ms-2 fw-bolder">F#10(2nd floor), Road #16, <br />Banany, Dhaka</p>
                        <div className='d-flex justify-content-evenly' style={{ fontSize: '2em' }}>
                            <FontAwesomeIcon icon={faFacebook} />
                            <FontAwesomeIcon icon={faInstagram} />
                            <FontAwesomeIcon icon={faTwitter} />
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;