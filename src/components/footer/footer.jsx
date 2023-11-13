import React from 'react'
import './footer.css'
import pharmacyLogo from '../assets/pharmacyLogo.webp'
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import styles from './footer.module.css'

// footer of the website design

const Footer = () => {
  return (
    <footer>
        <div className="contacts">
            <div className="pharmacy">
                <div className='pharmacy-content'>
                    <h1><img src={pharmacyLogo} alt='' height="50" width="50" style={{borderRadius:'50%'}}></img>&nbsp;&nbsp;<b>Pharmacy</b></h1>
                    <p>Order medicines online from pharmacies in Egypt, now order all your needs from the pharmacy easily.</p>
                    <nav>
                        <a href='https://www.facebook.com/profile.php?id=100065570170337' target='blank'><FaFacebook className={styles.icons}/></a>
                        <a href='https://www.instagram.com/mohamedhesham115/' target='blank'><FaInstagram className={styles.icons}/></a>
                        <a href='https://www.linkedin.com/in/mohamed-hesham-726903209/' target='blank'><FaLinkedinIn className={styles.icons}/></a>
                        <a href='https://twitter.com/mohammedelprns' target='blank'><FaTwitter className={styles.icons}/></a>
                    </nav>
                </div>
            </div>
            <div className="know-us">
                <div className='know-us-content'>
                    <h1><b>Know Us</b></h1>
                    <p className="about-us">About us</p>
                    <p className="blog">Blog</p>
                    <p className="contact-us">Contact Us</p>
                    <p className="owner">Are you a pharmacy Owner</p>
                </div>
            </div>
        </div>
        <div className="rights-reserved">
            <div className="left">
                <p>© 2023 pharmacy. All Rights Reserved</p>
            </div>
            <div className="right">
                <nav>
                    <p>Terms and conditions</p>
                    <hr/>
                    <p>Privacy Policy</p>
                </nav>
            </div>
        </div>
    </footer>
  )
}

export default Footer