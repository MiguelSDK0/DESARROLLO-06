import { useParams } from "react-router-dom";

export const Userdetails = () => {
  const { userId } = useParams();
  return (
    <div>
      <h1>Details of user {userId}</h1>
    </div>
  );
};
