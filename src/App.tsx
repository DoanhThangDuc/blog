import { Switch, Route } from "react-router-dom";
import GlobalStyle from "./shared/Global.styled";
import HomeContainer from "./containers/HomeContainer";
import PostDetailsContainer from "./containers/PostDetailsContainer";
import LifeStyleContainer from "./containers/LifeStyleContainer";
import MusicContainer from "./containers/MusicContainer";
import TravelContainer from "./containers/TravelContainer";
import PhotodiaryContainer from "./containers/PhotodiaryContainer";


// convert to nextjs
function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact>
          <HomeContainer />
        </Route>
        <Route path="/posts/:id">
          <PostDetailsContainer />
        </Route>
        <Route path="/lifestyle">
          <LifeStyleContainer />
        </Route>
        <Route path="/music">
          <MusicContainer />
        </Route>
        <Route path="/photodiary">
          <PhotodiaryContainer />
        </Route>
        <Route path="/travel">
          <TravelContainer />
        </Route>
      </Switch>
    </>
  );
}

export default App;
