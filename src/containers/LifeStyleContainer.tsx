import React from "react";
import { connect } from "react-redux";
import { RootState } from "../store";
import LifeStyle from "../pages/LifeStyle/LifeStyle";
import { PostModal } from "../components/post/Post";

const mapStateToProps = (state: RootState) => ({
  posts: state.posts,
});
function LifeStyleContainer({ posts }: { posts: PostModal[] }) {
  return <LifeStyle posts={posts} />;
}

export default connect(mapStateToProps)(LifeStyleContainer);
