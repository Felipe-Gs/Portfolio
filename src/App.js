import "./App.css";
import Home from "./componentes/Home";
import Habilidades from "./componentes/Habilidades";
import { Routes, Route } from "react-router-dom";
function App() {
   return (
      <div className="App">
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Habilidades" element={<Habilidades />} />
         </Routes>
      </div>
   );
}

export default App;
