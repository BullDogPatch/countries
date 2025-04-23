import { useEffect, useState } from 'react';
import './App.css';
import Country from './components/Country';

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
    fetchCountries();
  }, []);

  const filtered = query
    ? countries.filter((country) =>
        country.name.common.toLowerCase().includes(query)
      )
    : [];

  return (
    <>
      <input
        type='text'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className='bg-gray-100 text-gray-900 w-1/2 p-2 border border-gray-300 focus:outline-none focus:border-amber-400 rounded'
      />
      {filtered.map((country, i) => (
        <Country key={country + i} country={country} />
      ))}
    </>
  );
}

export default App;
