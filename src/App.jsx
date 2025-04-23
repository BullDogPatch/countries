import { useEffect, useState } from 'react';
import './App.css';
import Input from './components/Input';
import Countries from './components/Countries';

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
        country.name.common.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const exactMatch = countries.find(
    (country) => country.name.common.toLowerCase() === query.toLowerCase()
  );

  return (
    <>
      <Input query={query} onChange={(e) => setQuery(e.target.value)} />
      <Countries
        filteredCountries={exactMatch ? [exactMatch] : filteredCountries}
      />
    </>
  );
}

export default App;
