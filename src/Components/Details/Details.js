import React from 'react';
import './Details.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import image from '../../person.jpg'

const Details = () => {
    return (
        <div className='info-item'>
        <div className="person">

            <img className='circular-image' src={image} alt="" />
            <div className="text">
            
            <h1>Jesica Cat</h1>
            <p>   <FontAwesomeIcon icon={faLocationArrow}></FontAwesomeIcon> Sydney, Australia</p>
            </div>
         </div>
            <div className="info">
                <div>
                    <h1>65kg</h1>
                    <p>Weight</p>
                </div>
                <div>
                    <h1>6.5</h1>
                    <p>Height</p>
                </div>
                <div>
                    <h1>25yrs</h1>
                    <p>Age</p>
                </div>
            </div>
            <h4>Add A Break</h4>
            <div className="time">
                <button>10s</button>
                <button>20s</button>
                <button>30s</button>
                <button>40s</button>
                <button>50s</button>
            </div>
        </div>
    );
};

export default Details;