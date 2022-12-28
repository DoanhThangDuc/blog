import { connect } from "react-redux";
import { PostModal } from "../features/PostsSlice";
import Home from "../pages/Home/Home";
import { mapStateToProps } from "./PostDetailsContainer";

function HomeContainer({
  posts,
  status,
  errorMessage,
}: {
  posts: PostModal[];
  status: string;
  errorMessage: string | null;
}) {
  return <Home posts={posts} status={status} errorMessage={errorMessage} />;
}

export default connect(mapStateToProps)(HomeContainer);
