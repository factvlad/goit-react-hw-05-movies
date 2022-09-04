import { Loader } from "components";
import { Suspense } from 'react';
import { Routes, Route, } from "react-router-dom";
import { lazy } from 'react';

const Layout = lazy(() => import('./Layout/Layout'))
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'))
const NotFound = lazy(() => import('./NotFound/NotFound'))
const Movies = lazy(() => import('../pages/Movies/Movies'))
const Home = lazy(() => import('../pages/Home/Home'))
const Cast = lazy(() => import('../pages/Cast/Cast'))
const Reviews = lazy(() => import('../pages/Reviews/Reviews'))

const App = () => {
  return (
    <div>
      <Suspense fallback={ <Loader /> }>
        <div>
          <Routes>
            <Route path="/" element={ <Layout /> }>
              <Route index element={ <Home /> } />
              <Route path="/movies" element={ <Movies /> } />
              <Route path="/movies/:id" element={ <MovieDetails /> }>
                <Route path="cast" element={ <Cast /> } />
                <Route path="reviews" element={ <Reviews /> } />
              </Route>
              <Route path="*" element={ <NotFound /> } />
            </Route>
          </Routes>
        </div>
      </Suspense>
    </div>
  );
}

export default App;
