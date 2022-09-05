import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router'
import HomePage from './pages/home/home-page';

function App() {

  return (
    <Routes>
      <Route element={<HomePage />} path='/' exact={true} />
    </Routes>
  );
}

export default App;
