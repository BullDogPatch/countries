import { useEffect, useState } from 'react';

const API_KEY = import.meta.env.VITE_API_KEY;

const Country = ({ country }) => {
  const [weather, setWeather] = useState(null);
  const tempInCelsius = (weather?.main?.temp - 273.15).toFixed(1);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${country.latlng[0]}&lon=${country.latlng[1]}&appid=${API_KEY}`
        );
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchWeather();
  }, []);

  console.log(weather);

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
      {weather && (
        <div className='mt-4'>
          <p className='text-2xl font-bold'>Weather in {country.capital}</p>
          <p>{tempInCelsius}°C</p>
          <img src={weather?.icon} alt='' />
          <p>Wind Speed: {weather?.wind?.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default Country;
