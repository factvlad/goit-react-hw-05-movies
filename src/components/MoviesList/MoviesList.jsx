import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from "./MovieList.module.scss"

const MoviesList = ({ popularMovies }) => {
  return (
    <>
      <h1>TRENDING NOW</h1>
      <ul className={ s.movieList }>
        { popularMovies.map(el => (
          <li key={ el.id } id={ el.id }>
            <Link to={ `/movies/${el.id}` }>
              <div className={ s.imgWrapper }>
                <img
                  src={
                    el.poster_path
                      ? `https://image.tmdb.org/t/p/original${el.poster_path}`
                      : `https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg`
                  }
                  alt="img"
                />
                <p className={ s.title }>{ el.title }</p>
              </div>
            </Link>
          </li>
        )) }
      </ul></>
  );
};

export default MoviesList
MoviesList.propTypes = {
  popularMovies: PropTypes.array
}
