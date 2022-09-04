import { useParams, NavLink, Outlet } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getMovieForId } from '../../shared/api';
import s from "./MovieDetails.module.scss"
import { Button } from "components";


const MovieDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    const fetchMovieDetails = async () => {
      await getMovieForId(id).then(data => {
        setDetails(data);

      });
    };
    if (id) {
      fetchMovieDetails();
    }
  }, [id]);

  const {
    poster_path,
    original_title,
    overview,
    genres,
    release_date,
    vote_average,
  } = details;



  return (
    <div>
      <Button />
      <div className={ s.container }>
        <div className={ s.details }>
          <div className={ s.details_poster }>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/original/${poster_path}`
                  : `https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg`
              }
              alt=""
            />
          </div>
          <div className={ s.content }>
            <h2>
              { original_title } ({ Number.parseInt(release_date) })
            </h2>
            <p>User Score: { (vote_average * 10).toFixed(0) } %</p>
            <h3>Overview</h3>
            <p>{ overview }</p>
            <h4>Genres</h4>
            <p>{ genres?.map(el => el.name + ' ') }</p>
          </div>
        </div>
        <ul className={ s.list }>
          <li>
            <NavLink
              className={ ({ isActive }) =>
                isActive ? `${s.list_Link} ${s.active}` : `${s.list_Link}`
              }
              to="Cast"
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              className={ ({ isActive }) =>
                isActive ? `${s.list_Link} ${s.active}` : `${s.list_Link}`
              }
              to="Reviews"
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div >
      <Outlet />
    </div>
  )
}

export default MovieDetails;
