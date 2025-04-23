const Country = ({ country }) => {
  console.log(country);
  return (
    <div className='mt-4'>
      <p>{country.name.common}</p>
      <p>Capital: {country.capital[0]}</p>
      <p>Area: {country.area}</p>
      <img src={country.flags.png} alt={country.flags.alt} />
      <div className='m-2'>
        <p className='font-bold text-2xl'>Langauages</p>
        <ul>
          {Object.values(country.languages).map((lang) => (
            <li key={lang}>{lang}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Country;
