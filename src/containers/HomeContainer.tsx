import { connect } from "react-redux";
import Home from "../pages/Home/Home";
import { selectPosts } from "../selector";
import { RootState } from "../store";
import { mapStateToProps } from "./PostDetailsContainer";

function HomeContainer({
  state,
  status,
  errorMessage,
}: {
  state: RootState;
  status: string;
  errorMessage: string | null;
}) {
  return (
    <Home
      posts={selectPosts(state)}
      status={status}
      errorMessage={errorMessage}
    />
  );
}

export default connect(mapStateToProps)(HomeContainer);
