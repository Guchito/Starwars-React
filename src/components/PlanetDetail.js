import {useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './button.css'

function PlanetDetail() {
    const { id } = useParams();
    const [detail, setDetail] = useState({});

    useEffect(() => {
        const fetchPlanetDetail = async () => {
            try {
                const response = await fetch(`https://swapi.dev/api/planets/${id}/`);
                if (!response.ok) {
                    throw new Error('API is down');
                }
                const data = await response.json();
                setDetail(data);
            } catch (error) {
                console.error('Fetching from API failed, loading local data:', error);
                try {
                    const localResponse = await fetch('/data/planets.json');
                    if (!localResponse.ok) {
                        throw new Error('Failed to fetch local JSON');
                    }
                    const localData = await localResponse.json();
                    const planet = localData.find(p => p.pk === parseInt(id)); // Find the planet by id
                    setDetail(planet ? planet.fields : {});
                } catch (localError) {
                    console.error('Fetching local data also failed:', localError);
                    setDetail({}); // Set empty if both local and API fetch fails
                }
            }
        };

        fetchPlanetDetail();
    }, [id]);

    if (!detail.name) {
        return <div>Loading...</div>; // Show loading while fetching data
    }

    return (
        <div className='container'>
            <div className='detail'>
                <h1>{detail.name}</h1>
                <p>Rotation period: {detail.rotation_period} hrs</p>
                <p>Orbital Period: {detail.orbital_period} days</p>
                <p>Diameter: {detail.diameter} km</p>
                <p>Climate: {detail.climate}</p>
            </div>
            <div className='buttonContainer'>
                <button className='button'>
                    <Link to="/planets">Back</Link>
                </button>
            </div>
        </div>
    );
}

export default PlanetDetail;