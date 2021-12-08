import { Suspense, lazy } from 'react';

const MapsGrid = lazy(() => import('./components/MapsGrid'));

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <MapsGrid />
  </Suspense>
);

export default App;
