import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = ({ countriesPromise }) => {
  const countries = use(countriesPromise);

  const [visitedCountries, setVisitedCountries] = useState([]);

  const handleVisitedCountries = country => {
    console.log('country visited clicked to be added', country);
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  return (
    <div>
      <h2>Travelling Countries: {countries.length}</h2>
      <h3>Travelled so far: {visitedCountries.length}</h3>

      <ol>
        {visitedCountries.map(country => (
          <li>{country.name.common}</li>
        ))}
      </ol>

      <div className="countries">
        {countries.map(country => (
          <Country
            key={country.name}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
