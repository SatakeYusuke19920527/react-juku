import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from '../App';
import Q1 from '../questions/Q1';

const PageRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<App />} />
        <Route path="/question1" element={<Q1 />} />
      </Routes>
    </Router>
  );
};

export default PageRouter;
