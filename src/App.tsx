import { Switch, Route } from "react-router-dom";
import GlobalStyle from "./shared/Global.styled";
import HomeContainer from "./containers/HomeContainer";
import PostDetailsContainer from "./containers/PostDetailsContainer";
import CnbcContainer from "./containers/CnbcContainer";
import CnnContainer from "./containers/CnnContainer";
import BloombergContainer from "./containers/BloombergContainer";
import ReutersContainer from "./containers/ReutersContainer";

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
        <Route path="/cnbc">
          <CnbcContainer />
        </Route>
        <Route path="/cnn">
          <CnnContainer />
        </Route>
        <Route path="/reuters">
          <ReutersContainer />
        </Route>
        <Route path="/bloomberg">
          <BloombergContainer />
        </Route>
      </Switch>
    </>
  );
}

export default App;
