import React from 'react';
import './Card.css'

const Card = ({product,addToList}) => {
    const {name,picture,age,time,about}=product;
    return (
        <div className='product'>
            <img src={picture} alt="Gym" />
            <h4>Name: {name}</h4>
            <p>{about.slice(0,100)}</p>
            <h6>For-Age: {age}</h6>
            <h6>Time:  {time}s</h6>
           
            <button onClick={()=>addToList(product)}>Add to list</button>
           
        </div>
    );
};

export default Card;