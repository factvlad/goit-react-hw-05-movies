import { Routes, Route, } from "react-router-dom";
import { Layout, Home, Movies, NotFound } from "components";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route index element={ <Home /> } />
        <Route path="/movies" element={ <Movies /> } />
        <Route path="*" element={ <NotFound /> } />
      </Route>
    </Routes>

  );
}

export default App;
