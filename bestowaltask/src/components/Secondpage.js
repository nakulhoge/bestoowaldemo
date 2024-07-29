import React from 'react';
import Square from './Square';

const Secondpage = () => {
    return (
        <>
        <div class='firstdivsp '>
        <h1>Our Trending Designs</h1>
        <p>Explore the latest trends in interior design</p>
        </div>
        <div>
        <div className="container">
        <Square imageSrc="img1.jpeg" text="Kitchen Design" para="Kitchen is offer consider as heart of home, a place where family and friends gather to cook food" />
        <Square imageSrc="img2.jpeg" text="Kitchen Design" para="Kitchen is offer consider as heart of home, a place where family and friends gather to cook food" />
        <Square imageSrc="img3.jpeg" text="Kitchen Design" para="Kitchen is offer consider as heart of home, a place where family and friends gather to cook food"/>
        <Square imageSrc="img4.jpeg" text="Kitchen Design" para="Kitchen is offer consider as heart of home, a place where family and friends gather to cook food" />
        </div>
        </div>
        <div className="container1">
            <div>
            <h1><span className="material-symbols-outlined">verified</span> 410+</h1>
                <p className='p1'>Final projects</p> 
            </div>
            <div> 
                <h1><span class="material-symbols-outlined">person_play</span>3200+</h1>
                <p className='p1'>Happy Clients</p>
               </div>
            <div> 
                <h1><span class="material-symbols-outlined">diversity_2</span>410+</h1>
                <p className='p1'>Qualified Staf</p>
               </div>

        </div>
        </>
    );
};

export default Secondpage;