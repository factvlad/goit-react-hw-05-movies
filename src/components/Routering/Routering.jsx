import { Routes, Route, } from "react-router-dom";
import { lazy } from 'react';

// const Reviews = lazy(() => import(''))
const Home = lazy(() => import('../../pages/Home/Home'))
const Layout = lazy(() => import('../Layout/Layout'))
const Movies = lazy(() => import('../../pages/Movies/Movies'))
const NotFound = lazy(() => import('../../pages/NotFound/NotFound'))
const MoviesDetails = lazy(() => import('../../pages/MovieDetails/MovieDetails'))
const Cast = lazy(() => import('../../pages/Cast/Cast'))

const Routering = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <Home /> } />
          <Route path="/movies" element={ <Movies /> } />
          <Route path="/movies/:id" element={ <MoviesDetails /> }>
            <Route path="cast" element={ <Cast /> } />
            {/* <Route path="reviews" element={ <Reviews /> } /> */}
          </Route>
          <Route path="*" element={ <NotFound /> } />
        </Route>
      </Routes>
    </div>
  );
}
export default Routering;
