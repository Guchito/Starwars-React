import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './button.css'
import './list.css'

function Vehicles() {
    const [vehicles, setVehicles] = useState([])
    useEffect(()=>{
        fetch('https://swapi.dev/api/vehicles/')
        .then(response => response.json())
        .then(data => setVehicles(data.results))
    },[])

    return (
        <div className='container'>
            <ul className="list">
                {vehicles.map((vehicle, i)=> <Link to={`/vehicles/detail/${i+1}`}><li key={`${vehicle} ${i}`}> {vehicle.name} </li></Link>)}
            </ul>
            <div className='buttonListContainer'>
                <button className='button'>
                    <Link to="/">Back</Link>
                </button>
            </div>
        </div>
    )
}
export default Vehicles;