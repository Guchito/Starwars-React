import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './button.css'
import './list.css'

function Vehicles() {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        const fetchVehicles = async () => {
            try {
                const response = await fetch('https://swapi.dev/api/vehicles/');
                if (!response.ok) {
                    throw new Error('API is down');
                }
                const data = await response.json();
                setVehicles(data.results);
            } catch (error) {
                console.error('Fetching from API failed, loading local data:', error);
                try {
                    const localResponse = await fetch('/data/vehicles.json');
                    if (!localResponse.ok) {
                        throw new Error('Failed to fetch local JSON');
                    }
                    const localData = await localResponse.json();
                    setVehicles(localData); // Use local data
                } catch (localError) {
                    console.error('Fetching local data also failed:', localError);
                    setVehicles([]); // Set empty if both local and API fetch fails
                }
            }
        };

        fetchVehicles();
    }, []);

    return (
        <div className='container'>
            <ul className="list">
                {vehicles.map((vehicle, i) => (
                    <Link to={`/vehicles/detail/${i + 1}`} key={`${vehicle.name} ${i}`}>
                        <li>{vehicle.fields.name}</li>
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

export default Vehicles;