import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from '../App';
import Q1 from '../questions/Q1';
import Q2 from '../questions/Q2';
import Q3 from '../questions/Q3';
import Q4 from '../questions/Q4';
import Q5 from '../questions/Q5';
import Q6login from '../questions/Q6login';
import Q6main from '../questions/Q6main';

const PageRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<App />} />
        <Route path="/question1" element={<Q1 />} />
        <Route path="/question2" element={<Q2 />} />
        <Route path="/question3" element={<Q3 />} />
        <Route path="/question4" element={<Q4 />} />
        <Route path="/question5" element={<Q5 />} />
        <Route path="/question6/login" element={<Q6login />} />
        <Route path="/question6/main" element={<Q6main />} />
      </Routes>
    </Router>
  );
};

export default PageRouter;
