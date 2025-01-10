import {useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './button.css'


function VehicleDetail() {
    const { id } = useParams();
    const [detail, setDetail] = useState({});
    
    useEffect(() => {
        const fetchVehicleDetail = async () => {
            try {
                const response = await fetch(`https://swapi.dev/api/vehicles/`);
                if (!response.ok) {
                    throw new Error('API is down');
                }
                const data = await response.json();
                setDetail(data.results[id - 1]); // Get the vehicle by its ID
            } catch (error) {
                console.error('Fetching from API failed, loading local data:', error);
                try {
                    const localResponse = await fetch('/data/vehicles.json');
                    if (!localResponse.ok) {
                        throw new Error('Failed to fetch local JSON');
                    }
                    const localData = await localResponse.json();
                    setDetail(localData[id - 1].fields); // Fallback to local data
                } catch (localError) {
                    console.error('Fetching local data also failed:', localError);
                    setDetail({}); // Set empty if both local and API fetch fails
                }
            }
        };

        fetchVehicleDetail();
    }, [id]);

    return (
        <div className='container'>
            <div className='detail'>
                {detail.name ? (
                    <>
                        <h1>{detail.name}</h1>
                        <p>Model: {detail.model}</p>
                        <p>Manufacturer: {detail.manufacturer}</p>
                        <p>Cost: {detail.cost_in_credits} credits</p>
                        <p>Length: {detail.length} M</p>
                        <p>Cargo Capacity: {detail.cargo_capacity} tons</p>
                        <p>Consumables: {detail.consumables}</p>
                        <p>Crew: {detail.crew}</p>
                    </>
                ) : (
                    <p>Loading vehicle details...</p>
                )}
            </div> 
            <div className='buttonContainer'>
                <button className='button'>
                    <Link to="/vehicles">Back</Link>
                </button>
            </div>
        </div>
    );
}

export default VehicleDetail;
