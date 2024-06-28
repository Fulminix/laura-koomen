import React from 'react';
import '../styles/FooterPhotography.css';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function FooterPhotography() {
  return (
    <div className='footerPhotography'>
        <div className='socialMediaPhotography'>
        <Link to="https://www.instagram.com/ohangelooo/?hl=it"><InstagramIcon /></Link>
        <Link to="https://www.instagram.com/ohangelooo/?hl=it"><FacebookIcon /></Link>
        <Link to="https://www.instagram.com/ohangelooo/?hl=it"><EmailIcon /></Link>
        <Link to="https://www.instagram.com/ohangelooo/?hl=it"><ShoppingCartIcon /></Link>     
        </div>
        <p>&copy; 2024 laurakoomen.com</p>
    </div>
  )
}

export default FooterPhotography