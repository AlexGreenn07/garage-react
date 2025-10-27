import { useState } from "react";
import "./HomePage.css";

function HomePage() {
  const [value, setValue] = useState("");

  function handleChange(event) {
    setValue(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    alert("Форма отправлена");
  }

  return (
    <>
      <div className="home-page">
        <h2>Домашняя страница</h2>
        <p>Добро пожаловать на наш сайт!</p>
        <button>Нажми меня</button>
        <input type="text" onChange={handleChange} />
        <p>{value}</p>
        <form onSubmit={handleSubmit}>
          <button type="submit">Отправить</button>
        </form>
      </div>
    </>
  );
}
export default HomePage;
