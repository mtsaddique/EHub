import React from 'react'
import { FaInstagram, FaFacebook, FaTwitter, FaHome, FaInfo, FaHeadset, FaPhoneAlt, FaBriefcase, FaLaptopCode, FaSchool, FaUserGraduate, FaUniversity, FaGraduationCap } from 'react-icons/fa'
export default function Footer() {
    return (
        <>
            <div className="mainFooter">
                <div className="chilFooter">
                    <div className="logofooter">
                        <img src="src\assets\removeBg.png" alt="no show" />
                        <h2><span className='ehub'>eH</span>ub</h2>
                    </div>
                    <div className="contentfooter">
                        <div className="pagesfooter">
                            <div className="iconHome coomon">
                                <FaHome size={20} /><a href="#">Home</a>

                            </div>
                            <div className="aboutIcon coomon">

                                <FaInfo size={20} /><a href="#">About</a>
                            </div>
                            <div className="serviceIcon coomon">
                                <FaHeadset size={20} /><a href="#">Service</a>
                            </div>
                            <div className="contactIcon coomon">
                                <FaPhoneAlt size={20} /><a href="#">Contact Pages</a>
                            </div>
                        </div>
                        <div className="ehub-featurefooter">
                            <div className="coomon">
                                <FaBriefcase size={20} /> <a href="#">Jobs</a>
                            </div>
                            <div className="coomon">
                                <FaLaptopCode size={20} /><a href="#">Freelancing</a>
                            </div>
                            <div className="coomon">
                                <FaSchool size={20} /><a href="#">School</a>
                            </div>
                            <div className="coomon">
                                <FaGraduationCap size={20} /><a href="#">College</a>
                            </div>
                            <div className="coomon">
                                <FaUniversity size={20} /> <a href="#">University</a>
                            </div>
                        </div>
                        <div className="socialfooter">
                            <div className='facebookicon coomon'>
                                <FaFacebook size={20} /> <a href="#">Facebook</a>
                            </div>
                            <div className="instaicon coomon">
                                <FaInstagram size={20} /><a href="#">Instagram</a>
                            </div>
                            <div className="twittericon coomon">
                                <FaTwitter size={20} /><a href="#">Twitter</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
