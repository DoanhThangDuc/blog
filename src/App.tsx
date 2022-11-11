import { Routes, Route, BrowserRouter } from "react-router-dom";
import GlobalStyle from "./shared/Global.styled";
import Header from "./components/header/Header";
import LifeStyle from "./components/pages/LifeStyle";
import Music from "./components/pages/Music";
import Photodiary from "./components/pages/Photodiary";
import Travel from "./components/pages/Travel";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<LifeStyle />} />
        <Route path="/" element={<Music />} />
        <Route path="/" element={<Photodiary />} />
        <Route path="/" element={<Travel />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
