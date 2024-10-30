import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './list.css';

function Characters() {
    const [characters, setCharacters] = useState([])
    useEffect(()=>{
        fetch('https://swapi.dev/api/people/')
        .then(response => response.json())
        .then(data => setCharacters(data.results))
    },[])

    return (<ul>
        {characters.map((character, i)=> <Link to={`/characters/detail/${i+1}`}> <li key={ `${character} ${i}` }> {character.name} </li></Link>)}
        </ul>
    )

}

export default Characters;