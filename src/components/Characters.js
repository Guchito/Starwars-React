import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './button.css'
import './list.css';

function Characters() {
    const [characters, setCharacters] = useState([])
    useEffect(()=>{
        fetch('https://swapi.dev/api/people/')
        .then(response => response.json())
        .then(data => setCharacters(data.results))
    },[])

    return (<div className="container">
        <ul className="list">
            {characters.map((character, i)=> <Link to={`/characters/detail/${i+1}`}> <li key={ `${character} ${i}` }> {character.name} </li></Link>)}
        </ul>
        <div className='buttonContainer noShow'>
            <button className='button'>
                <Link to="/">Back</Link>
            </button>
        </div>
    </div>
    )

}

export default Characters;