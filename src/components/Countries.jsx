import CountriesList from './CountriesList';
import Country from './Country';

const Countries = ({ filteredCountries }) => {
  const length = filteredCountries.length;
  if (length > 10) return <p>Be more specific</p>;

  return (
    <>
      {length > 1
        ? filteredCountries.map((country, i) => (
            <CountriesList key={country.name.common} country={country} />
          ))
        : length === 1 && <Country country={filteredCountries[0]} />}
    </>
  );
};

export default Countries;
