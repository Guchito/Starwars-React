import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import './list.css'

function Vehicles() {
    const [vehicles, setVehicles] = useState([])
    useEffect(()=>{
        fetch('https://swapi.dev/api/vehicles/')
        .then(response => response.json())
        .then(data => setVehicles(data.results))
    },[])

    return (<ul>
        {vehicles.map((vehicle, i)=> <Link to={`/vehicles/detail/${i+1}`}><li key={`${vehicle} ${i}`}> {vehicle.name} </li></Link>)}
        </ul>
    )
}
export default Vehicles;