import Home from './pages/Home';
import TestingForm from './pages/TestingForm';
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Submission from './pages/Submission';
import UploadImage from './pages/UploadImage';
import Analysis from './pages/Analysis';
import Demographics from './pages/Demographics';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/form' element={<TestingForm /> } />
        <Route path='/submitted' element={<Submission />} />
        <Route path='/upload' element={<UploadImage />} />
        <Route path='/analysis' element={<Analysis />} />
        <Route path='/demographics' element={<Demographics />} />
      </Routes>
    </Router>
  );
}

export default App;
