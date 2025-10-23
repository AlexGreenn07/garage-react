import { Button } from "../components/Button";
import { UserList } from "../components/UserList";
import "./HomePage.css";

function HomePage() {
  const handleClick = () => {
    alert("меня нажали");
  };
  return (
    <div className="home-page">
      <h2>Домашняя страница</h2>
      <p>Добро пожаловать на наш сайт!</p>
      <Button label="Нажми меня" onClick={handleClick}></Button>
      <UserList></UserList>
    </div>
  );
}
export default HomePage;
