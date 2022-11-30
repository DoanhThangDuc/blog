import { Routes, Route, BrowserRouter } from "react-router-dom";
import GlobalStyle from "./shared/Global.styled";
import HomeContainer from "./containers/HomeContainer";
import PostDetailsContainer from "./containers/PostDetailsContainer";
import LifeStyleContainer from "./containers/LifeStyleContainer";
import MusicContainer from "./containers/MusicContainer";
import TravelContainer from "./containers/TravelContainer";
import PhotodiaryContainer from "./containers/PhotodiaryContainer";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/posts/:id" element={<PostDetailsContainer />} />
        <Route path="/lifestyle" element={<LifeStyleContainer />} />
        <Route path="/music" element={<MusicContainer />} />
        <Route path="/photodiary" element={<PhotodiaryContainer />} />
        <Route path="/travel" element={<TravelContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
