import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight,  faCompassDrafting, faDoorOpen, faHammer,  faHandHoldingDollar,  faUserShield,} from '@fortawesome/free-solid-svg-icons';
import './Fifthpage.css';

const Fifthpage = () => {
    const [activeIndices, setActiveIndices] = useState([0]);
  const [messages] = useState([
    "Due to enormous knowledge in this field, we are able to provide",
    "Due to enormous knowledge in this field, we are able to provide",
    "Due to enormous knowledge in this field, we are able to provide",
    "Due to enormous knowledge in this field, we are able to provide",
    "Due to enormous knowledge in this field, we are able to provide",
    "Due to enormous knowledge in this field, we are able to provide",
  ]);
  const [listNames] = useState([
    "Modular Interious",
    "Full Home Interiors",
    "Luxury Interious",
    "Renovation",
    "Commercial Interiors",
    "Furniture & Decor",
  ]);
  const [icons] = useState([
   faCompassDrafting,
   faDoorOpen,
   faHandHoldingDollar,
   faHammer,
   faUserShield,
   faUserShield
  ]);

  const toggleAccordion = (index) => {
    const currentIndex = activeIndices.indexOf(index);
    let newActiveIndices = [];

    if (currentIndex === -1) {
      newActiveIndices = [...activeIndices, index];
    } else {
      newActiveIndices = activeIndices.filter((i) => i !== index);
    }

    setActiveIndices(newActiveIndices);
  };
    return (
        <>
            <div className='container5'>
                <div className='firstdiv5'>
                    <h1>What We Do?</h1>
                    <p className='firstdiv5'>We provide all kinds of construction and bulding Services and we are always glad to resolvenonstandard and </p><p>unique task we always take challenges and bring them to conclusion</p>
                </div>
                <div className='row row5'>
                    <div className='col firstdiv5'>
                    <ul>
        {messages.map((message, index) => (
          <li key={index}>
            <div className="list-item" onClick={() => toggleAccordion(index)}>
              <div className="left-icon">
                <FontAwesomeIcon icon={icons[index]} />
              </div>
              <div className="list-content">
              <h4>{listNames[index]}</h4>
                {activeIndices.includes(index) ? 
                (
                  <FontAwesomeIcon icon={faChevronDown} />
                ) : 
                (
                  <FontAwesomeIcon icon={faChevronRight} />
                )}
              </div>
            </div>
            {activeIndices.includes(index) && <div>{message}</div>}
          </li>
        ))}
      </ul>
      <button className='btn5'>View More <FontAwesomeIcon icon={faChevronDown} /> </button>
      </div>
      <div className='col seconddiv5'>
           <img className='i5g' src='img2.jpeg' alt='image'></img>
            </div>
      </div>
      </div>     
      </>
    );
};

export default Fifthpage;