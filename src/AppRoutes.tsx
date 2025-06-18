import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Productos from './pages/Productos';
import Contacto from './pages/Contacto';
import Address from './pages/Address';
import Sales from './pages/Sales';
import IndexUseStates from './useStates/IndexUseStates';
import IndexUseEffect from './useEffect/IndexUseEffect';
import FormularioBasico from './formulario/FormularioBasico';
import FormularioRHF from './formulario/FormularioRHF';
import FormularioZod from './formulario/FormularioZod';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/address" element={<Address />} />
      <Route path="/sales" element={<Sales />} />
      <Route path="/use-states" element={<IndexUseStates />} />
      <Route path="/use-effect" element={<IndexUseEffect />} />
      <Route path="/formulario-basico" element={<FormularioBasico />} />
      <Route path="/formulario-rhf" element={<FormularioRHF />} />
      <Route path="/formulario-zod" element={<FormularioZod />} />
    </Routes>
  );
}