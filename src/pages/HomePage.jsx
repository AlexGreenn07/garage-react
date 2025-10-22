import { Button } from "../components/Button";
import { UserList } from "../components/UserList";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home-page">
      <h2>Домашняя страница</h2>
      <p>Добро пожаловать на наш сайт!</p>
      <Button></Button>
      <UserList></UserList>
    </div>
  );
}
export default HomePage;
