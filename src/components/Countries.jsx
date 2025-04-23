import Country from './Country';

const Countries = ({ filteredCountries }) => {
  const length = filteredCountries.length;
  if (length > 10) return <p>Be more specific</p>;

  return (
    <>
      {length > 1
        ? filteredCountries.map((country, i) => (
            <Country key={country + i} country={country} />
          ))
        : length === 1 && <Country country={filteredCountries[0]} />}
    </>
  );
};

export default Countries;
