import React, { useState, useEffect } from 'react';

function App() {
  const [display, setDisplay] = useState({ results: [] });

  const url =
    'https://api.themoviedb.org/3/movie/popular?api_key=8dfe9e89fa67bdae1baf0a2fd27b81d1&language=en-US&page=1';
  const bearer =
    'eyJhbGciOiJIUzI1NiJ9.     eyJhdWQiOiI4ZGZlOWU4OWZhNjdiZGFlMWJhZjBhMmZkMjdiODFkMSIsInN1YiI6IjYwMGFiYThkMmEyMTBjMDAzZjk5YWI5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1fsPphGEGRBYf78b1Ai4ua5f-9Stn_xf_OAKPs3lGZk';

  useEffect(() => {
    const getInfo = async () => {
      const response = await fetch(url, {
        header: {
          Authorization: bearer,
        },
      });
      const data = await response.json();
      setDisplay(data);
      console.log(data);
    };
    getInfo();
  }, []);

  return (
    <>
      {display.results.map((i) => {
        return (
          <>
            <h3>{i.title}</h3>
            <p>{i.overview}</p>
            <p>{i.vote_average}</p>
          </>
        );
      })}
    </>
  );
}

export default App;
