import { useParams } from 'react-router-dom';
import './PetDetails.css';

const PetDetails = () => {
  const { petId } = useParams();

  const petsData = {
    1: { name: "Max", type: "Perro", age: 4, owner: "Carlos" },
    2: { name: "Luna", type: "Gato", age: 2, owner: "María" },
    3: { name: "Snowball", type: "Conejo", age: 3, owner: "Ana" }
  };

  const pet = petsData[petId];

  if (!pet) {
    return <h2>Mascota no encontrada</h2>;
  }

  return (
    <div className="pet-details">
      <h2>Detalles de {pet.name}</h2>
      <p>Tipo: {pet.type}</p>
      <p>Edad: {pet.age} años</p>
      <p>Dueño: {pet.owner}</p>
    </div>
  );
};

export default PetDetails;
