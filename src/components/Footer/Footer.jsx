import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

 

import './Footer.css'

const Footer = () => {
    return (
        <>
       
        <div className="footer-wrapper">
        <hr/>
            <div className="footer-div">
                <div className="footer-text">
                    <p>kikitech &copy; 2021</p>
                    </div>
                <div className="footer-links">
                    <ul>
                        <li className="footer-list"><a href="https://www.linkedin.com/in/okikijesu-oriola-b0b296197/" className="footer-link" ><BsLinkedin/></a></li>
                        <li className="footer-list"><a href ="https://www.twitter.com/young_okj/" className="footer-link" ><BsTwitter/></a></li>
                        <li className="footer-list"><a href ="https://www.instagram.com/young_okj/" className="footer-link" ><BsInstagram/></a></li>
                    </ul>
                </div>

            
            </div>
        </div>

            
        </>
    )
}

export default Footer
