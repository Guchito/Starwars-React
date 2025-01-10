import './button.css'
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function SpecieDetail() {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchSpecieDetail = async () => {
      try {
        // First, fetch the species data from the local JSON file
        const localResponse = await fetch('/data/species.json');
        if (!localResponse.ok) {
          throw new Error('Failed to fetch species data');
        }
        const speciesData = await localResponse.json();

        // Find the species with the matching pk
        const localSpecie = speciesData.find((item) => item.pk === parseInt(id));
        
        if (localSpecie) {
          setDetail(localSpecie.fields);

          // Now fetch people data based on the pks in the species' people array
          const peopleData = await Promise.all(
            localSpecie.fields.people.map(async (personPk) => {
              const localPeopleResponse = await fetch('/data/people.json');
              if (localPeopleResponse.ok) {
                const peopleData = await localPeopleResponse.json();
                const person = peopleData.find((p) => p.pk === personPk);
                return person ? person.fields.name : null;
              }
              return null; // If the fetch fails, return null
            })
          );
          
          // Filter out any null values (in case some people data is missing or couldn't be fetched)
          setPeople(peopleData.filter((person) => person !== null));
        } else {
          console.error('Specie not found in local data');
        }
      } catch (error) {
        console.error('Error fetching species data:', error);
        setDetail(null); // Set to null if fetching species data fails
      }
    };

    fetchSpecieDetail();
  }, [id]);

  if (!detail) {
    return <div>Loading...</div>; // Show loading while fetching data
  }

  return (
    <div className="container">
      <div className="detail">
        <h1>{detail.name}</h1>
        <p>Classification: {detail.classification}</p>
        <p>Designation: {detail.designation}</p>
        <p>Eye colors: {detail.eye_colors}</p>
        <p>Skin colors: {detail.skin_colors}</p>
        <p>Language: {detail.language}</p>

        <h3>People:</h3>
        <ul>
          {people.length > 0 ? (
            people.map((personName, index) => (
              <li key={index}>
                <Link to={`/characters/detail/${id}`}>{personName}</Link>
              </li>
            ))
          ) : (
            <p>No people found for this species.</p>
          )}
        </ul>
      </div>
      <div className="buttonContainer">
        <button className="button">
          <Link to="/species">Back</Link>
        </button>
      </div>
    </div>
  );
}

export default SpecieDetail;
