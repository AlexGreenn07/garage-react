import { UserList } from "../components/UserList";
import "./HomePage.css";

function HomePage({ click, setClick }) {
  const handleClick = () => {
    setClick(click + 1);
  };

  return (
    <div className="home-page">
      <h2>Домашняя страница</h2>
      <p>Добро пожаловать на наш сайт!</p>
      <button onClick={handleClick}>Нажми меня</button>
      <p>{click}</p>
      <UserList></UserList>
    </div>
  );
}
export default HomePage;
