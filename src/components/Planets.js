import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './button.css'
import './list.css'

function Planets() {
    const [planets, setPlanets] = useState([]);

    useEffect(() => {
        const fetchPlanets = async () => {
            try {
                const response = await fetch('https://swapi.dev/api/planets/');
                if (!response.ok) {
                    throw new Error('API is down');
                }
                const data = await response.json();
                setPlanets(data.results);
            } catch (error) {
                console.error('Fetching from API failed, loading local data:', error);
                try {
                    const localResponse = await fetch('/data/planets.json');
                    if (!localResponse.ok) {
                        throw new Error('Failed to fetch local JSON');
                    }
                    const localData = await localResponse.json();
                    setPlanets(localData); // Set the planets from local data
                } catch (localError) {
                    console.error('Fetching local data also failed:', localError);
                    setPlanets([]); // Set empty if both local and API fetch fails
                }
            }
        };

        fetchPlanets();
    }, []);

    if (planets.length === 0) {
        return <div>Loading...</div>; // Show loading while fetching data
    }

    return (
        <div className='container'>
            <ul className="list">
                {planets.map((planet, i) => (
                    <Link to={`/planets/detail/${i + 1}`} key={i}>
                        <li>{planet.fields.name}</li>
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

export default Planets;