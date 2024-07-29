import React from 'react';
import './Eightpage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const Eightpage = () => {
    return (
        <>
        <div className='footer'> 
        <div className='div1'>
            <img className='img8' src="logo192.png" alt="" />
            <p>First Floor,above CSB Bank,Ambedkar Chwok Pimpri Pune,Maharashtra</p>
            <h6>987456315</h6>
            <h6>company@gmail.com</h6>
            <h6>Assets Downlode from (www.xyz.com)</h6>

        </div>
        <div className='div2'>
            <h5>Contact</h5>
            <h6>About us</h6>
            <h6>Privacy policy</h6>
            <h6>Career</h6>

        </div>
        <div className='div3'>
            <h5>Support</h5>
            <h6>Contact us</h6>
            <h6>Community</h6>
            

        </div>
        <div className='div4'>
            <h5>Social Media</h5>
            <h6>INSTA</h6>
            <h6>YOUTUBE</h6>
            <h6>FACEBOOK</h6>

        </div>
        <h6>&#169;All Rights Reserved company.com</h6>
        </div>    
        </>
    );
};

export default Eightpage;