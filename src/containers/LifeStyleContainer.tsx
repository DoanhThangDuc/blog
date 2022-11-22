import React from "react";
import { connect } from "react-redux";
import { RootState } from "../store";
import LifeStyle from "../pages/LifeStyle/LifeStyle";
import { PostModal } from "../components/post/Post";
import { PostDetailsModal } from "../features/PostDetailsSlice";
import { closeDetails, openDetails } from "../features/PostDetailsSlice";
import { Dispatch } from "redux";

const mapStateToProps = (state: RootState) => ({
  posts: state.posts,
  postDetails: state.postDetails,
});
function mapDispatchToProps(dispatch: Dispatch) {
  return {
    openDetails: (id: number) => {
      dispatch(openDetails(id));
    },
    closeDetails: () => {
      dispatch(closeDetails());
    },
  };
}

function LifeStyleContainer({
  posts,
  postDetails,
  openDetails,
  closeDetails,
}: {
  posts: PostModal[];
  postDetails: PostDetailsModal;
  openDetails: (id: number) => void;
  closeDetails: () => void;
}) {
  const currentPost = posts.find((post) => post.id === postDetails.id);
  const suggestedPosts = posts
    .filter((post) => post.subject === currentPost?.subject)
    .slice(0, 3);

  return (
    <LifeStyle
      posts={posts}
      postDetails={postDetails}
      currentPost={currentPost}
      openDetails={openDetails}
      closeDetails={closeDetails}
      suggestedPosts={suggestedPosts}
    />
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(LifeStyleContainer);
