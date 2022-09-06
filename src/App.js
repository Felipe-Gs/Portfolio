import './App.css';
import Home from './componentes/Home';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Skills from './componentes/Skills'
import Habilidades from './componentes/Habilidades';
import {Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Habilidades' element={<Habilidades/>}/>
      </Routes>
    </div>
  );
}

export default App;
