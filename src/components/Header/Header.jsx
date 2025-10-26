import "./Header.css";

function Header({ click, isDarkMode, setIsDarkMode }) {
  return (
    <header
      className="container"
      style={{
        background: isDarkMode ? "white" : "#2e2e2e",
        color: isDarkMode ? "black" : "white",
        height: 200,
      }}
    >
      <h1>Заголовок</h1>
      <p>{click}</p>
    </header>
  );
}
export default Header;
