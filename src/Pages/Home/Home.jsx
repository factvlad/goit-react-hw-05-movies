import { getMostPopularMovies } from "shared/api"
import { useEffect, useState } from "react"
import { MoviesList } from "components";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState(null);

  useEffect(() => {
    getMostPopularMovies()
      .then(({ results }) => setPopularMovies(results))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      { popularMovies && <MoviesList popularMovies={ popularMovies } /> }
    </>
  )

}

export default Home;
