import React from 'react';
import './style.css'; //if nvbar is not fixed at top please style.css and angin import style.css i don't know whats the problem if you find please tell me
import { Navbar, Nav,Button} from "react-bootstrap";
import SearchInput from "./SearchInput";
import { FaArrowUp } from 'react-icons/fa';

const MyNavbar = () => {
  return (
    <div className="background-image">
    <Navbar   className="mb-4 navbar">
      <div className='logo'>
    <Navbar.Brand href="#">BARDEINFRA</Navbar.Brand>
    </div>
      <div className='navitems'>
        <Nav.Link  href="/home">Home</Nav.Link>
        <Nav.Link  href="/#">Services&#9662;</Nav.Link>
        <Nav.Link  href="/gallery">Gallery</Nav.Link>
        <Nav.Link   href="#">About Us</Nav.Link>
      </div>
        <div>
        <SearchInput />
        </div>
     <div className='contactb'>
      <Button className='cbutton' variant="success">Contact Us</Button>
      </div>
  </Navbar>
  <div className="content">
    <h1 className="text">Elevate Your Space</h1>
    <h1 className="text">Elevate Your Life</h1>
    <p className='para'>Is your space holding you back?Find out how to elevate your </p>
    <p className='para'>environment and elevate your life</p>
    <div className="input-container">
      <input type="text" placeholder="Enter text" className="input-field" />
      <button className="button">
      Get Started <FaArrowUp />
  </button>
</div>
  </div>
  </div>
  
);
};
export default MyNavbar;
