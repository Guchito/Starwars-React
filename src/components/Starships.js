import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './button.css'
import './list.css'

function Starships() {
    const [starships, setStarships] = useState([])
    useEffect(()=>{
        fetch('https://swapi.dev/api/starships/')
        .then(response => response.json())
        .then(data => setStarships(data.results))
    },[])

    return (<div className='container'>
        <ul className="list">
            {starships.map((starship, i)=> <Link to={`/starships/detail/${i+1}`}> <li key={`${starship} ${i}`}> {starship.name} </li> </Link>)}
        </ul>
        <div className='buttonContainer noShow'>
            <button className='button'>
                <Link to="/">Back</Link>
            </button>
        </div>
    </div>

    )
}
export default Starships;