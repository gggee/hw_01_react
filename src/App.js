import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Book from './pages';
import Music from './pages/music';
import Recipe from './pages/recipe'
import Movie from './pages/movie';
import Resume from './pages/resume';
import Clock from './pages/clock';
import Pets from './pages/pets';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Movie/>}/>
        <Route path='/music' element={<Music/>}/>
        <Route path='/recipe' element={<Recipe/>}/>
        <Route path='/book' element={<Book/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/clock' element={<Clock/>}/>
        <Route path='/pets' element={<Pets/>}/>
      </Routes>
    </Router>
  );
}

export default App;
