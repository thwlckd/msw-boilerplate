import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Real from './pages/Real';
import Fake from './pages/Fake';
import Delay from './pages/Delay';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/real" element={<Real />} />
          <Route path="/fake" element={<Fake />} />
          <Route path="/delay" element={<Delay />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
