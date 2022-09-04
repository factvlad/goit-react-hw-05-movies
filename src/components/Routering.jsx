import { Routes, Route, } from "react-router-dom";
import { lazy } from 'react';

const { Home, Layout, Movies, NotFound, MoviesDetails } = lazy(() => import('components'))
// const { Layout } = lazy(() => import('components/'))
// const { Movies } = lazy(() => import('components/'))
// const { NotFound } = lazy(() => import('components/'))
// const  MoviesDetails = lazy(() => import('../components'))
// const Reviews = lazy(() => import('../pages/Reviews/Reviews'))
// const Cast = lazy(() => import('../pages/Cast/Cast'))



const Routering = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <Home /> } />
          <Route path="/movies" element={ <Movies /> } />
          <Route path="/movies/:id" element={ <MoviesDetails /> }>
            {/* <Route path="cast" element={ <Cast /> } />
            <Route path="reviews" element={ <Reviews /> } /> */}
          </Route>
          <Route path="*" element={ <NotFound /> } />
        </Route>
      </Routes>
    </div>
  );
}
export default Routering;
