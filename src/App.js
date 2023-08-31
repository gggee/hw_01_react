import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Book from './pages';
import Music from './pages/music';
import Recipe from './pages/recipe'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Book/>}/>
        <Route path='/music' element={<Music/>}/>
        <Route path='/recipe' element={<Recipe/>}/>
      </Routes>
    </Router>
  );
}

export default App;
