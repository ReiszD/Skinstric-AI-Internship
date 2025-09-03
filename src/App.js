import Home from './pages/Home';
import TestingForm from './pages/TestingForm';
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Submission from './pages/Submission';
import UploadImage from './pages/UploadImage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/form' element={<TestingForm /> } />
        <Route path='/submitted' element={<Submission />} />
        <Route path='/upload' element={<UploadImage />} />
      </Routes>
    </Router>
  );
}

export default App;
