import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getReviews } from '../../shared/api';
import s from "./Reviews.module.scss"


const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      await getReviews(id).then(({ results }) => {
        setReviews(results);
      });
    };
    if (id) {
      fetchMovieReviews();
    }
  }, [id]);
  const renderReviews = reviews.map(({ author, content, id }) => (
    <li key={ id }>
      <h4>Author: { author }</h4>
      <p>{ content }</p>
    </li>
  ));
  return (
    <>
      { reviews.length !== 0 ? (
        <ul className={ s.wrapper }>{ renderReviews }</ul>
      ) : (
        <p className={s.sorry}>Sorry bro :( </p>
      ) }
    </>
  );
};

export default Reviews;
