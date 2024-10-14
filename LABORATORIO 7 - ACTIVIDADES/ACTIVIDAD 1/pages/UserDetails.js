import { useParams } from 'react-router-dom';

const UserDetails = () => {
  // useParams captura el valor de userId desde la URL
  const { userId } = useParams();
  
  return (
    <div>
      <h2>Detalles del Usuario {userId}</h2>
      <p>Aquí puedes mostrar información específica del usuario con ID {userId}.</p>
    </div>
  );
};

export default UserDetails;
