import Header from "../Header/Header.jsx";
import HomePage from "../../pages/HomePage.jsx";
import { Footer } from "../Footer/Footer.jsx";
import { useState } from "react";
import { ThemeToggle } from "../ThemeToggle.jsx";
import "./App.css";

function App() {
  const [click, setClick] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <main className="app">
      <Header
        click={click}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      ></Header>
      <ThemeToggle
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      ></ThemeToggle>
      <HomePage click={click} setClick={setClick}></HomePage>
      <Footer></Footer>
    </main>
  );
}

export default App;
