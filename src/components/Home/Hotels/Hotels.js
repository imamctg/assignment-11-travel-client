import React, { useEffect, useState } from 'react';
import Hotel from '../Hotel/Hotel';
import './Hotels.css';

const Hotels = () => {
    const [hotels, sethotels] = useState([]);
    useEffect(() => {
        fetch('https://frozen-crag-22043.herokuapp.com/hotels')
            .then(res => res.json())
            .then(data => sethotels(data))
    }, [])
    return (
        <div>
            <h1>HOTEL BOOK</h1>
            <hr className="hrline" />
            <div className="row mt-3 mb-2 mx-auto container">
                {
                    hotels.map(hotel => <Hotel
                        key={hotel.id}
                        hotel={hotel}
                    ></Hotel>)
                }
            </div>
        </div>
    );
};

export default Hotels;