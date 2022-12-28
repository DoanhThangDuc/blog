import { connect } from "react-redux";
import Home from "../pages/Home/Home";
import { selectPostsBySubject } from "../selector";
import { RootState } from "../store";
import { mapStateToProps } from "./PostDetailsContainer";

function LifeStyleContainer({ state }: { state: RootState }) {
  return <Home posts={selectPostsBySubject(state, "LIFESTYLE")} />;
}

export default connect(mapStateToProps)(LifeStyleContainer);
