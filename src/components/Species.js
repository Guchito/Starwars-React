import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './button.css'
import './list.css'


function Species() {
    const [species, setSpecies] = useState([]);

    useEffect(() => {
        const fetchSpecies = async () => {
            try {
                const response = await fetch('https://swapi.dev/api/species/');
                if (!response.ok) {
                    throw new Error('API is down');
                }
                const data = await response.json();
                setSpecies(data.results);
            } catch (error) {
                console.error('Fetching from API failed, loading local data:', error);
                try {
                    const localResponse = await fetch('/data/species.json');
                    if (!localResponse.ok) {
                        throw new Error('Failed to fetch local JSON');
                    }
                    const localData = await localResponse.json();
                    setSpecies(localData); // Set the species from local data
                } catch (localError) {
                    console.error('Fetching local data also failed:', localError);
                    setSpecies([]); // Set empty if both local and API fetch fails
                }
            }
        };

        fetchSpecies();
    }, []);

    if (species.length === 0) {
        return <div>Loading...</div>; // Show loading while fetching data
    }

    return (
        <div className='container'>
            <ul className="list">
                {species.map((specie, i) => (
                    <Link to={`/species/detail/${i + 1}`} key={i}>
                        <li>{specie.fields.name}</li>
                    </Link>
                ))}
            </ul>
            <div className='buttonContainer noShow'>
                <button className='button'>
                    <Link to="/">Back</Link>
                </button>
            </div>
        </div>
    );
}

export default Species;