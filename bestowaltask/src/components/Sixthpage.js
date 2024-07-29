import React, { useState } from 'react';
import './Sixthpage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const Sixthpage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = ["six1.jpeg", "six2.jpeg", "six3.jpeg", "six4.jpeg"];
    const paragraphs = [
         "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia hic quas aspernatur! Quasi, aliquam, recusandae minus beatae sunt similique eveniet eligendi eos adipisci et totam, debitis maiores inventore molestias minima.",
         "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia hic quas aspernatur! Quasi, aliquam, recusandae minus beatae sunt similique eveniet eligendi eos adipisci et totam, debitis maiores inventore molestias minima.",
         "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia hic quas aspernatur! Quasi, aliquam, recusandae minus beatae sunt similique eveniet eligendi eos adipisci et totam, debitis maiores inventore molestias minima.",
         "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia hic quas aspernatur! Quasi, aliquam, recusandae minus beatae sunt similique eveniet eligendi eos adipisci et totam, debitis maiores inventore molestias minima."
    ];
    const names = ["Akshay Kumar", "Rajnikanth", "Amir khan", "Vijay Thalapathy"];
    const jobTitles = ["Designer", "Developer", "Manager", "Artist"];

    const handleNext = () => {
        setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    };

    const handlePrevious = () => {
        setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    };

    return (
        <>
            <div className='outerdiv6'>
                <div>
                    <h1>Discover the Impact</h1>
                         <h1>Our Designs</h1>
                </div>
                <div className='row6'>
                    <div className='col-6'>
                        <img className='img6' src={images[currentIndex]} alt="" />
                    </div>
                    <div className='col-6'>
                    <FontAwesomeIcon icon={faQuoteLeft} />
                     <p>{paragraphs[currentIndex]}</p>
                        <h2>{names[currentIndex]}</h2>
                        <p>({jobTitles[currentIndex]})</p>
                    </div>
                    <div className="navigation-buttons">
                        <button onClick={handlePrevious}>
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </button>
                        <button onClick={handleNext}>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sixthpage;
