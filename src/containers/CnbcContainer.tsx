import { connect } from "react-redux";
import { PostModal } from "../features/PostsSlice";
import Home from "../pages/Home/Home";
import { mapStateToProps } from "./PostDetailsContainer";

function CnbcContainer({ cnbcPosts }: { cnbcPosts: PostModal[] | undefined }) {
  return <Home posts={cnbcPosts} />;
}

export default connect(mapStateToProps)(CnbcContainer);
