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
        country.name.common.toLowerCase().includes(query)
      )
    : [];

  return (
    <>
      <Input query={query} onChange={(e) => setQuery(e.target.value)} />
      <Countries filteredCountries={filteredCountries} />
    </>
  );
}

export default App;
