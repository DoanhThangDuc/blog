import GlobalStyle from "./shared/Global.styled";
import Header from "./components/header/Header";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LifeStyle from "./components/pages/LifeStyle";
import Music from "./components/pages/Music";
import Photodiary from "./components/pages/Photodiary";
import Travel from "./components/pages/Travel";

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
    </BrowserRouter>
  );
}

export default App;
