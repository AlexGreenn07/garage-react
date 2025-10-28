import Header from "../Header/Header.jsx";
import HomeColumnLeft from "../../pages/Left/HomeColumnLeft.jsx";
import HomeColumnRight from "../../pages/Right/HomeColumnRight.jsx";
import { Footer } from "../Footer/Footer.jsx";
import "./App.css";
import "./BodyPage.css";

function App() {
  return (
    <main className="app">
      <Header></Header>
      <div className="bodyPage">
        <HomeColumnLeft></HomeColumnLeft>
        <HomeColumnRight></HomeColumnRight>
      </div>
      <Footer></Footer>
    </main>
  );
}

export default App;
