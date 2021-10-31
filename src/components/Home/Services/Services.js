import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch('https://frozen-crag-22043.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])
    return (
        <div className="package-tour">
            <h1 className="mt-3 mb-3">PACKAGE TOUR</h1>
            <hr className="hrline" />
            <div className="row mt-3 mb-2 mx-auto container">
                {
                    packages.map(packge => <Service
                        key={packge.name}
                        packge={packge}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;