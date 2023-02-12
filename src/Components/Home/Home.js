import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Details from '../Details/Details';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import './Home.css'
import { addToDb } from '../../utilities/fakedb';

const Home = () => {
    const[products,setProduct]=useState([]);
    const[info,setInfo]=useState([]);
    useEffect(()=>{
        fetch('generated.json')
        .then(res=>res.json())
        .then(data=>{setProduct(data)})
    },[]);
     const addToList =(product)=>{
      const newInfo=[...info,product]
      setInfo(newInfo);
      addToDb(product.id)
     }
    return (
        <div className='container'>
            <div>
                <div className="header">
                    
                <h1> <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon>Ultra-Productive</h1>
                <h4>Select today's exercise</h4>
                </div>

            <div className="item-container">
                {
                    products.map(product=>
                        <Card
                        key={product.id}
                        product={product}
                        addToList={addToList}
                        ></Card>
                        )
                    }
                
            </div>
                    </div>
            <div className="details-container">
                <Details info={info}></Details>
               
            </div>
        </div>
    );
};

export default Home;