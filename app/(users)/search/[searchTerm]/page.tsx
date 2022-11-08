import React from 'react';

type PageProps = {
  params: {
    searchTerm: string;
  };
};

type SearchResults = {
  organic_results: [
    { position: number; title: string; link: string; thumbnail: string; snippet: string }
  ];
};

const search = async (searchTerm: string) => {
  const res = await fetch(
    `https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.API_KEY}`
  );
  const data: SearchResults = await res.json();
  return data;
};

async function SearchResults({ params: { searchTerm } }: PageProps) {
  const searchResults = await search(searchTerm);
  console.log(searchResults);
  return (
    <div>
      {searchResults.organic_results.map(({ position, link, snippet, thumbnail, title }) => (
        <li key={position}>
          <p>{title}</p>
          <p>{link}</p>
          <p>{snippet}</p>
          <img src={thumbnail} alt='thumbnail' />
        </li>
      ))}
    </div>
  );
}

export default SearchResults;
