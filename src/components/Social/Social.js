import React from 'react'
import classes from './Social.css';

import { FaTwitter, FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';

export default function Social() {
    return (
        <div className={classes.Social}>
            <a href="https://github.com/dalalRohit" target="_blank" rel="noopener noreferrer">
                <FaGithub size={35} />
            </a>
            <a href="https://www.linkedin.com/in/rohit-dalal-61330116b/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn size={35} />
            </a>
            <a href="https://twitter.com/dalal__rohit" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={35} />
            </a>
            <a href="https://www.instagram.com/rohit__dalal/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={35} />
            </a>
        </div>
    )
}
