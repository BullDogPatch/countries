import { useEffect, useState } from 'react';
import './App.css';
import Country from './components/Country';
import Input from './components/Input';

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

  const filteredCountries = query
    ? countries.filter((country) =>
        country.name.common.toLowerCase().includes(query)
      )
    : [];

  return (
    <>
      <Input query={query} onChange={(e) => setQuery(e.target.value)} />
      {filteredCountries.map((country, i) => (
        <Country key={country + i} country={country} />
      ))}
    </>
  );
}

export default App;
