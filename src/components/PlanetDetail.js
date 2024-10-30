import {useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function PlanetDetail(){
    const {id} = useParams();
    const [detail, setDetail]=useState([])
    useEffect(()=>{
        fetch(`https://swapi.dev/api/planets/${id}/`)
            .then(response => response.json())
            .then(data => setDetail(data))
    },[])

    


    return (<> 
        <h1>{detail.name}</h1>
        <p>Rotation period: {detail.rotation_period} hs</p>
        <p>Orbital Period: {detail.orbital_period} days</p>
        <p>Diameter: {detail.diameter} kms </p>
        <p>Climate: {detail.climate} </p>
     

    
    </>)
}

export default PlanetDetail;