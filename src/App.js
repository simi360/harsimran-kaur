import logo from './logo.svg';
import {Routes, Route, Outlet} from 'react-router-dom'
import './App.css';

import Navigation from './routes/navigation/navigation.route';
import Home from './routes/home/home.route';

const About = () => {
  return <h1>I am the About page</h1>;
};

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
      </Route>
    </Routes> 
  );
}

export default App;

