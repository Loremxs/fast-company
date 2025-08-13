import { useEffect, useState } from "react";
import api from "../api";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import QualitiesList from "./qualitiesList";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const UserPage = () => {
  const params = useParams();
  const { userId } = params;
  const history = useHistory();
  const handleClick = () => {
    history.push("/users");
  };
  const [user, setUser] = useState();
  useEffect(() => {
    api.users.getById(userId).then((data) => setUser(data));
  }, [userId]);
  if (user) {
    return (
      <div>
        <h1>{user.name}</h1>
        <h2>Профессия: {user.profession.name}</h2>
        <QualitiesList qualities={user.qualities}></QualitiesList>
        <p>{`Completed meetings: ${user.completedMeetings}`}</p>
        <h2>{`Оценка: ${user.rate}/5`}</h2>
        <button onClick={handleClick}>Все пользователи</button>
      </div>
    );
  } else {
    return <h1>Loading</h1>;
  }
};
export default UserPage;
