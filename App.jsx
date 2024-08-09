import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Services from './Services';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/services' element={<Services />} />
    </Routes>
  );
}

export default App;
