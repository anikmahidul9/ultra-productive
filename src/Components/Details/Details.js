import React, { useEffect, useState } from 'react';
import './Details.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import image from '../../person.jpg'

const Details = (props) => {
    const {info} = props;
    // console.log(cart);
    let total = 0;
    for(const product of info){
        total=total+ parseInt( product.time);
    }
    const [result, setResult]= useState(0);
  

    const handleClick=(e)=>{
      
       setResult(e.target.value);  
    }
    console.log(info)
         
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
                <button value='10' onClick={handleClick}>10s</button>
                <button value='20' onClick={handleClick}>20s</button>
                <button value='30' onClick={handleClick}>30s</button>
                <button value='40' onClick={handleClick}>40s</button>
                <button value='50' onClick={handleClick}>50s</button>
            </div>
            <h4>Exercise Details</h4>
            <div className="calculateTime">
                <div className="exercise">
                    <h5>Exercise Time {total}</h5>
                    </div>
                    <div className="break">
                        <h5>Break Time:   {result} </h5>
                    </div>
            </div>
        </div>
    );
};

export default Details;