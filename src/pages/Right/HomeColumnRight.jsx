import { User } from "./User.jsx";
import "./HomeColumnRight.css";

function HomeColumnRight() {
  const users = [
    { id: 1, name: "Alise", age: 20 },
    { id: 2, name: "Alex", age: 38 },
    { id: 3, name: "Gennadiy", age: 25 },
  ];

  return (
    <div className="HomeColumnRight">
      {users.map((user) => (
        <User key={user.id} name={user.name} age={user.age}></User>
      ))}
    </div>
  );
}

export default HomeColumnRight;
