import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from './components';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}></Route>
      <Route path="*" element={<Navigate to={'/'} />}></Route>
    </Routes>
  );
};

export default App;
