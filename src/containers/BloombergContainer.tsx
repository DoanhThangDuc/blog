import { connect } from "react-redux";
import Home from "../pages/Home/Home";
import { selectPostsBySubject } from "../selector";
import { RootState } from "../store";
import { mapStateToProps } from "./PostDetailsContainer";

function BloombergContainer({ state }: { state: RootState }) {
  return <Home posts={selectPostsBySubject(state)} />;
}

export default connect(mapStateToProps)(BloombergContainer);
