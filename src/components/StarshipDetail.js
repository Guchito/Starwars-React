import {useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './button.css'

function StarshipDetail(){
    let {id} = useParams();
    id++;

    const [detail, setDetail]=useState([])
    useEffect(()=>{
        fetch(`https://swapi.dev/api/starships/${id}/`)
            .then(response => response.json())
            .then(data => setDetail(data))
    },[id])
    


    return (<div className='container'> 
        <div className='detail'>
            <h1>{detail.name}</h1>
            <p>Model: {detail.model}</p>
            <p>Manufacturer: {detail.manufacturer}</p>
            <p>Cost: {detail.cost_in_credits} credits</p>
            <p>Length: {detail.length} M</p>
            <p>Cargo Capacity: {detail.cargo_capacity} tons</p>
            <p>Consumables: {detail.consumables}</p>
            <p>Crew: {detail.crew}</p>
        </div>
        <div className='buttonContainer'>
            <button className='button'>
                <Link to="/starships">Back</Link>
            </button>
        </div>

    
    </div>)
}

export default StarshipDetail;