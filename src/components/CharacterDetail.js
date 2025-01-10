import {useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './button.css'

function CharacterDetail() {
    const { id } = useParams();
    const [detail, setDetail] = useState(null);

    useEffect(() => {
        const fetchCharacterDetail = async () => {
            try {
                const response = await fetch(`https://swapi.dev/api/people/${id}/`);
                if (!response.ok) {
                    throw new Error('API is down');
                }
                const data = await response.json();
                setDetail(data);
            } catch (error) {
                console.error('Fetching from API failed, loading local data:', error);
                try {
                    const localResponse = await fetch('/data/people.json');
                    if (!localResponse.ok) {
                        throw new Error('Failed to fetch local JSON');
                    }
                    const localData = await localResponse.json();
                    // Find the character with the matching ID in the local data
                    const localCharacter = localData.find(item => item.pk === parseInt(id));
                    if (localCharacter) {
                        setDetail(localCharacter.fields); // Set the character detail from local data
                    } else {
                        console.error('Character not found in local data');
                    }
                } catch (localError) {
                    console.error('Fetching local data also failed:', localError);
                    setDetail(null); // Set to null if local fetch fails
                }
            }
        };

        fetchCharacterDetail();
    }, [id]);

    if (!detail) {
        return <div>Loading...</div>; // Show loading while fetching data
    }

    return (
        <div className='container'>
            <div className='detail'>
                <h1>{detail.name}</h1>
                <p>Height: {detail.height / 100} meters</p>
                <p>Mass: {detail.mass} kg</p>
                <p>Hair color: {detail.hair_color}</p>
                <p>Skin color: {detail.skin_color}</p>
                <p>Birth year: {detail.birth_year}</p>
                <p>Eye color: {detail.eye_color}</p>
            </div>
            <div className='buttonContainer'>
                <button className='button'>
                    <Link to="/characters">Back</Link>
                </button>
            </div>
        </div>
    );
}

export default CharacterDetail;
