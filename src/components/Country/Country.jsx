import React, { useState } from 'react';

import './Country.css';

const Country = ({ country, handleVisitedCountries, handleVisitedFlags }) => {
  const [visited, setVisited] = useState(false);

  //console.log(handleVisitedCountries);

  const handleVisited = () => {
    const newVisited = !visited;
    setVisited(newVisited);

    if (newVisited) {
      handleVisitedCountries(country);
    }
  };

  // console.log(country.flags);
  return (
    <div className={`country  ${visited && 'country-visited'}`}>
      {/* when one class is fixed and another is for conditional rendaring */}
      <h3>{country.name.common} </h3>
      <img src={country.flags?.png} alt="" />
      <h4>Independent: {country.independent ? 'Free' : 'Not Free'}</h4>
      <p>Population: {country.population}</p>

      <button
        className={visited ? 'btn-visited' : 'btn-not-visited'}
        onClick={handleVisited}
      >
        {visited ? 'Visited' : 'Not visited'}
      </button>

      <button onClick={() => handleVisitedFlags(country.flags.png)}>
        Add Visited Flag
      </button>
    </div>
  );
};

export default Country;
