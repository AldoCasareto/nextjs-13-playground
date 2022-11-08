'use client';

import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react';

const Search = () => {
  const [search, setSearch] = useState('');
  const router = useRouter();

  console.log(`search = `, search);

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch('');
    router.push(`/search/${search}`);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          value={search}
          placeholder='enter search text'
          type='text'
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className='rounded-full bg-blue-200 text-white font-bold py-2 px-4' type='submit'>
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
Search;
