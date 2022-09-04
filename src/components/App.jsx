import { Loader } from "components";
import { Suspense } from 'react';
import Routering from "./Routering/Routering";



const App = () => {
  return (
    <div>
      <Suspense fallback={ <Loader /> }>
        <Routering />
      </Suspense>
    </div>
  );
}

export default App;
