import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Home.css'

const Home = () => {
    const[products,setProduct]=useState([]);
    useEffect(()=>{
        fetch('generated.json')
        .then(res=>res.json())
        .then(data=>{setProduct(data);console.log(data)})
    },[])
    return (
        <div className='container'>
            <div>
                <div className="header">
                    
                <h1>Ultra-Productive</h1>
                <h4>Select today's exercise</h4>
                </div>

            <div className="item-container">
                {
                    products.map(product=>
                        <Card
                        key={product._id}
                        product={product}
                        ></Card>
                        )
                    }
                
            </div>
                    </div>
            <div className="details-container">
                <p>This is details</p>
            </div>
        </div>
    );
};

export default Home;