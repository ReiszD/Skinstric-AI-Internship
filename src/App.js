import Home from './pages/Home';
import TestingForm from './pages/TestingForm';
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Submission from './pages/Submission';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/form' element={<TestingForm /> } />
        <Route path='/submitted' element={<Submission />} />
      </Routes>
    </Router>
  );
}

export default App;
