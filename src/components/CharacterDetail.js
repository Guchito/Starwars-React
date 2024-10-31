import {useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './button.css'

function CharacterDetail() {
    const {id} = useParams();
    const [detail, setDetail]=useState([])
    useEffect(()=>{
        fetch(`https://swapi.dev/api/people/${id}/`)
            .then(response => response.json())
            .then(data => setDetail(data))
    },[id])

    


    return (<div className='container'> 
        <div className='detail'>
            <h1>{detail.name}</h1>
            <p>Heigth: {detail.height/100}</p>
            <p>Mass: {detail.mass}</p>
            <p>Hair color: {detail.hair_color} </p>
            <p>Skin color: {detail.skin_color} </p>
            <p>Birth year: {detail.birth_year} </p>
            <p>Eye color: {detail.eye_color} </p>        
        </div>
        <div className='buttonContainer'>
            <button className='button'>
                <Link to="/characters">Back</Link>
            </button>
        </div>
    
    </div>)
}

export default CharacterDetail;