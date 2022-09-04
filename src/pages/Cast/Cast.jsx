import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCast } from '../../shared/api';
import s from './Cast.module.scss';

const Cast = () => {
  const { id } = useParams();
  const [actors, setActors] = useState([]);
  useEffect(() => {
    const fetchMovieCredits = async () => {
      await getCast(id).then(({ cast }) => {
        setActors(cast);
      });
    };
    if (id) {
      fetchMovieCredits();
    }
  }, [id]);
  const renderActors = actors.map(
    ({ profile_path, original_name, character, id }) => (
<div className={s.castWrapper}>
        <li key={ id } className={ s.item }>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/original/${profile_path}`
                : `https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg`
            }
            alt=""
          />
          <p>{ original_name }</p>
          <p>{ character }</p>
        </li>
</div>
    )
  );
  return (
    <>
      { actors.length !== 0 ? (
        <ul className={ s.list }>{ renderActors }</ul>
      ) : (
        <p>We dont have any actors for this movie</p>
      ) }
    </>
  );
};

export default Cast;
