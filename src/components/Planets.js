import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './button.css'
import './list.css'

function Planets() {
    const [planets, setPlanets] = useState([])
    useEffect(()=>{
        fetch('https://swapi.dev/api/planets/')
        .then(response => response.json())
        .then(data => setPlanets(data.results))
    },[])

    return (
    <div className='container'>
        <ul className="list">
            {planets.map((planet, i)=> <Link to={`/planets/detail/${i+1}`}> <li key={i}> {planet.name} </li></Link>)}
        </ul>
        <div className='buttonListContainer'>
            <button className='button'>
                <Link to="/">Back</Link>
            </button>
        </div>
    
    </div>
    )
}
export default Planets;