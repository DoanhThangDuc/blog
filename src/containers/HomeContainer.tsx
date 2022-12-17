import { connect } from "react-redux";
import Home from "../pages/Home/Home";
import { selectPosts } from "../selector";
import { RootState } from "../store";
import { mapStateToProps } from "./PostDetailsContainer";

function HomeContainer({
  state,
  status,
}: {
  state: RootState;
  status: string;
}) {
  return <Home posts={selectPosts(state)} status={status} />;
}

export default connect(mapStateToProps)(HomeContainer);
