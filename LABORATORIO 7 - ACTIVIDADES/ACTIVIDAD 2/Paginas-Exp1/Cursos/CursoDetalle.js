import { useParams } from "react-router-dom";
import { cursos } from './ListaCursos'; // Asegúrate de que la ruta esté correcta

export const CursoDetalle = () => {
  const { cursoId } = useParams(); // Obtener el cursoId de la URL
  const curso = cursos.find(c => c.id === Number(cursoId)); // Convertir cursoId a número para la comparación

  if (!curso) {
    return <h2>Curso no encontrado</h2>; // Mostrar mensaje si no se encuentra el curso
  }

  return (
    <div>
      <h1>{curso.name}</h1> {/* Mostrar el nombre del curso */}
      <p>{curso.description}</p> {/* Mostrar la descripción del curso */}
    </div>
  );
};
