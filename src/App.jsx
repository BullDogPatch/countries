import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch(
        'https://studies.cs.helsinki.fi/restcountries/api/all'
      );
      const data = await response.json();
      setCountries(data);
    };
    console.log(countries);
    fetchCountries();
  }, []);

  return (
    <>
      {countries.map((country) => (
        <div key={country}>{country.name.common}</div>
      ))}
    </>
  );
}

export default App;
