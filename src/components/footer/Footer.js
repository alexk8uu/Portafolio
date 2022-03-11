import React from 'react'
import './Footer.css'
import Contact from '../contact/Contact.js';


const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-info'>
                <Contact/>
            </div>
            <div className='footer-fns'>
                <div className='design-by'>
                    Design By Fredy Alejandro Carrizo
                </div>
                <div className='sns-links'>
                    <a href='https://www.linkedin.com/in/alexk8uu/' target="_blank" rel='noreferrer'>
                        <i className='fab fa-linkedin linkedin'></i>
                    </a>
                    <a href='https://github.com/alexk8uu' target="_blank"  rel='noreferrer'>
                        <i className='fab fa-github github'></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer