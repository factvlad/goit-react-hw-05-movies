import { useEffect, useState } from "react"
import { getMostPopularMovies } from "shared/api"
import { MoviesList } from "components";
import s from "./Home.module.scss"

const Home = () => {
  const [popularMovies, setPopularMovies] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchTrending = async () => {
      await getMostPopularMovies(page).then(({ results }) => {
        setPopularMovies(results);
      });
    };
    fetchTrending();
  }, [page]);

  return (
    <>
      { popularMovies && <MoviesList popularMovies={ popularMovies } /> }
      <div className={ s.btnWrap }>
        { page !== 1 && (
          <button
            className={ s.btn }
            type="button"
            onClick={ () => setPage(page - 1) }
          >
            Pevios page
          </button>
        ) }

        { popularMovies !== null && <button
          className={ s.btn }
          type="button"
          onClick={ () => setPage(page + 1) }
        >
          Next page
        </button> }
      </div>
    </>
  )

}

export default Home;
