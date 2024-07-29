import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './Third.css';


const Thirdpage = () => {
    return (
        <>
            <div className='tcontainer'>
                <div className='row row1'>
                    <div className='col firstdiv'>
      <h1>We don't just design, We design experience.</h1>
      <p>
        Barde Infra Solutions is the premier design establishment rendering
        architectural, interior design, landscape design, project management
        consultancy & vastu consultancy services.Our clients include many 
        important transnational corporate and major
        players in the Indian scenario.
      </p>
      <button className='btn1'>About us<FaArrowUp /></button>
      </div>
      <div className='col seconddiv'>
        <div className='seconddivi'>
            <div>
            <img className='simg1' src="img1.jpeg" alt="imge" />
            </div>
            <div>
            <img  className='simg2'src="img2.jpeg" alt="imge" />
            </div>
            <div>
            <img className='simg1'src="img3.jpeg" alt="imge" />
            </div>
    
      </div>
      </div>
      </div>
            </div>
        </>
    );
};

export default Thirdpage;