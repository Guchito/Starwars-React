import {useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function VehicleDetail(){
    const {id} = useParams();
    const [detail, setDetail]=useState([])
    useEffect(()=>{
        fetch(`https://swapi.dev/api/vehicles/`)
            .then(response => response.json())
            .then(data => setDetail(data.results[id-1]))
    },[])



    return (<> 
        <h1>{detail.name}</h1>
        <p>Model: {detail.model}</p>
        <p>Manufacturer: {detail.manufacturer}</p>
        <p>Cost: {detail.cost_in_credits} credits</p>
        <p>Length: {detail.length} M</p>
        <p>Cargo Capacity: {detail.cargo_capacity} tons</p>
        <p>Consumables: {detail.consumables}</p>
        <p>Crew: {detail.crew}</p>


    
    </>)
}

export default VehicleDetail;