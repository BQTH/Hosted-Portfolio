import React from 'react'
import * as FaIcons from 'react-icons/fa'
//import * as FaIcons from 'react-icons/fa'
import Fade from 'react-reveal/Fade';

function socials() {
    return (
        <div className="socials-position">
            <Fade left duration={500}>
            <div className="social-icon">
                <FaIcons.FaGithub/> - BQTH
            </div>

            <div className="social-icon">
                <FaIcons.FaInstagram/> - ThyartisParkway
            </div>

            <div className="social-icon">
                <FaIcons.FaLinkedinIn/> - Benjamin ten Hove
            </div>
            </Fade>
        </div>
    )
}

export default socials
