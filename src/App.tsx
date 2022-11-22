import { Routes, Route, BrowserRouter } from "react-router-dom";
import GlobalStyle from "./shared/Global.styled";
import Header from "./components/header/Header";
import LifeStyleContainer from "./containers/LifeStyleContainer";
import Music from "./pages/Music";
import Photodiary from "./pages/Photodiary";
import Travel from "./pages/Travel";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<LifeStyleContainer />} />
        <Route path="/music" element={<Music />} />
        <Route path="/photodiary" element={<Photodiary />} />
        <Route path="/travel" element={<Travel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
