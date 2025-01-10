import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './button.css'
import './list.css';

// const personajes = require('../data/people.json');
// personajes.map(personaje => console.log(personaje.fields.name))

function Characters() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await fetch('https://swapi.dev/api/people/');
                if (!response.ok) {
                    throw new Error('API is down');
                }
                const data = await response.json();
                setCharacters(data.results || []);
            } catch (error) {
                console.error('Fetching from API failed, loading local data:', error);
                try {
                    const localResponse = await fetch('/data/people.json');
                    if (!localResponse.ok) {
                        throw new Error('Failed to fetch local JSON');
                    }
                    const localData = await localResponse.json();
                    // Access characters from the 'fields' property
                    const localCharacters = localData.map(item => item.fields);
                    setCharacters(localCharacters);
                } catch (localError) {
                    console.error('Fetching local data also failed:', localError);
                    setCharacters([]); // Set an empty array if local fetch fails
                }
            }
        };

        fetchCharacters();
    }, []);

    return (
        <div className="container">
            <ul className="list">
                {characters.length > 0 ? (
                    characters.map((character, i) => (
                        <Link key={i} to={`/characters/detail/${i + 1}`}>
                            <li>{character.name}</li>
                        </Link>
                    ))
                ) : (
                    <div>Loading...</div> // Show loading while fetching data
                )}
            </ul>
            <div className="buttonContainer noShow">
                <button className="button">
                    <Link to="/">Back</Link>
                </button>
            </div>
        </div>
    );
}

export default Characters;
