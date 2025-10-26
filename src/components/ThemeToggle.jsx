export function ThemeToggle({ isDarkMode, setIsDarkMode }) {
  const toggle = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div
      style={{
        background: isDarkMode ? "grey" : "white",
        color: isDarkMode ? "white" : "black",
        height: 200,
      }}
    >
      <button onClick={toggle}>Сменить тему</button>
    </div>
  );
}
