const Input = ({ query, onChange }) => {
  return (
    <input
      type='text'
      value={query}
      onChange={onChange}
      className='bg-gray-100 font-semibold text-gray-900 w-1/2 p-2 border border-gray-300 focus:outline-none focus:border-amber-400 rounded'
    />
  );
};

export default Input;
