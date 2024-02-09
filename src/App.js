import {Productos} from './componentes/Productos';
import {Servicios}  from './componentes/Servicios';
import {SobreNosotros} from './componentes/SobreNosotros';
import { Contacto } from './componentes/Contacto';
import {BrowserRouter, Routes, Route } from 'react-router-dom'; 
import { NavBar } from './componentes/NavBar';
import { Inicio } from './componentes/Inicio';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <NavBar/>
      <Routes>

        <Route exact path="/" element={<Inicio/>}></Route>
        <Route exact path="/Productos" element={<Productos/>}></Route>
        <Route exact path="/Servicios" element={<Servicios/>}></Route>
        <Route exact path="/SobreNosotros" element={<SobreNosotros/>}></Route>
        <Route exact path="/Contacto" element={<Contacto/>}></Route>

      </Routes>
      </BrowserRouter>
      
     
      </div>
  );
}

export default App;
