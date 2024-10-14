import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cabecera } from './Paginas-Exp1/Cabecera/Cebecera';
import { Home } from './Paginas-Exp1/Home';
import { Normativa } from './Paginas-Exp1/Normativa';
import { Simulador } from './Paginas-Exp1/Simulador';
import { Blog } from './Paginas-Exp1/Blog/Blog';
import { Cursos } from './Paginas-Exp1/Cursos/Cursos';
import { Contactanos } from './Paginas-Exp1/Contactanos';
import { Civil } from './Paginas-Exp1/Civil';
import { Penal } from './Paginas-Exp1/Penal';
import { Laboral } from './Paginas-Exp1/Laboral';
import { Procesal } from './Paginas-Exp1/Procesal';
import { NoPage } from './Paginas-Exp1/NoPage';
import { CursoDetalle } from './Paginas-Exp1/Cursos/CursoDetalle';

function AppExp1() {
  return (
    <div className="AppExp1">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cabecera />}>
            <Route index element={<Home />} />
            <Route path="Normativa" element={<Normativa />} />
            <Route path="Simulador" element={<Simulador />} />
            <Route path="Blog" element={<Blog />}>
              <Route path="Civil" element={<Civil />} />
              <Route path="Penal" element={<Penal />} />
              <Route path="Laboral" element={<Laboral />} />
              <Route path="Procesal" element={<Procesal />} />
            </Route>
            <Route path="Cursos" element={<Cursos />}>
              <Route path=":cursoId" element={<CursoDetalle />} />
            </Route>
            <Route path="Contactanos" element={<Contactanos />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppExp1;
