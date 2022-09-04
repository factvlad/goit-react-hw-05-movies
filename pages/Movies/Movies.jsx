import { useState, useEffect } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import { Searchbar } from 'components';
import { getMoviesQuery } from "shared/api"
import s from "./Movies.module.scss"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Movies = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get('query') ?? '';

  useEffect(() => {
    const fetchSearch = async () => {
      await getMoviesQuery(searchValue).then(({ results }) => {
        if (results.length === 0) {
          toast.error('🦄 Sorry use another name', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
          return;
        }
        setSearchResult(results);
      });
    };
    if (searchValue) {
      fetchSearch();
    }
  }, [searchValue]);

  const submitValue = data => {
    setSearchParams({ query: data });
  };

  const renderMovies = searchResult.map(
    ({ poster_path, original_title, vote_average, id }) => (
      <li key={ id } className>
        <NavLink to={ `/Movies/${id}` } >
          <div className={ s.imgWrapper }>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/original/${poster_path}`
                  : `https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg`
              }
              alt=""
            />
            <p className={ s.title }>{ original_title }</p>
          </div>
        </NavLink>
      </li>
    )
  );

  return (
    <section>
      <Searchbar submitValue={ submitValue } />
      { searchResult && searchResult.length > 0 ? <ul className={ s.movieList }> { renderMovies }</ul> : <div className={ s.finder }></div> }
      <ToastContainer />
    </section>
  );
};

export default Movies;
