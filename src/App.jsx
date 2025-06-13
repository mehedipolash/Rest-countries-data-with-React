import { Suspense } from 'react';
import './App.css';
import Countries from './components/Countries/Countries';

const countriesPromise = fetch(
  'https://restcountries.com/v3.1/all?fields=name,capital,currencies,region,population,flags,independent,cca3'
).then(res => res.json());

function App() {
  return (
    <>
      <Suspense fallback={<h3>Nadir vai going....</h3>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  );
}

export default App;
