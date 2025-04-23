import { useState } from 'react';
import Country from './Country';

const CountriesList = ({ country }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className='flex justify-center items-center m-2'>
        <p className='mr-2'>{country.name.common}</p>
        <button
          className='cursor-pointer ml-2 rounded-md text-black bg-amber-200 p-1'
          onClick={() => setShow((s) => !s)}
        >
          {show ? 'hide' : 'show'}
        </button>
      </div>
      {show && <Country country={country} />}
    </>
  );
};

export default CountriesList;
