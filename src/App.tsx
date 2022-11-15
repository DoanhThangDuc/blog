import { Routes, Route, BrowserRouter } from "react-router-dom";
import GlobalStyle from "./shared/Global.styled";
import Header from "./components/header/Header";
import LifeStyle from "./components/pages/LifeStyle";
import Music from "./components/pages/Music";
import Photodiary from "./components/pages/Photodiary";
import Travel from "./components/pages/Travel";
import Footer from "./components/footer/Footer";
import FirstPost from "./homepage/FirstPost";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<LifeStyle />} />
        <Route path="/music" element={<Music />} />
        <Route path="/photodiary" element={<Photodiary />} />
        <Route path="/travel" element={<Travel />} />
      </Routes>
      <FirstPost />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
