import { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountry}) => {

    const {name, flags, capital, region, borders, area, population, cca3} = country;

    const [visit, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visit);
    }

    return (
        <div className={`country ${visit ? 'visited' : 'Visit'}`}>
            <img className='img' src= {flags.png} />
            <h2>Name :  {name.common} </h2>
            <h3>Official Name : {name.official}</h3>
            <h3>Capital : {capital} </h3>
            <h3>Country Code : {cca3} </h3>
            <h3>Region : {region} </h3>
            <h3>Borders : {borders} </h3>
            <h3>Area : {area} KM<sup>2</sup> </h3>
            <h3>Populations : {population} </h3>
            <button className='btn' onClick={handleVisited}>{visit ? 'Visited' : 'Visit'}</button>
            <button className='btn' onClick={() => handleVisitedCountry(country)}>Mark Visited</button>
            

        </div>
    );
};

export default Country;