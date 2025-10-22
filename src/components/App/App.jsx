import Header from "../Header/Header.jsx";
import HomePage from "../../pages/HomePage.jsx";
import { Footer } from "../Footer/Footer.jsx";

import "./App.css";

function App() {
  return (
    <main className="app">
      <Header></Header>
      <HomePage></HomePage>
      <Footer></Footer>
    </main>
  );
}

export default App;
