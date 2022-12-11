import React from "react";
import { useParams } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import PostDetails from "../pages/postDetails/PostDetails";
import { selectCurrentPost, selectSuggestPosts } from "../selector";
import { RootState } from "../store";
import { PostModal } from "../components/post/Post";

export const mapStateToProps = (state: RootState) => {
  const id = state.router.location.pathname.slice(-1);
  return {
    id: id,
    state: state,
    suggestedPosts: selectSuggestPosts(state, id),
    postDetails: selectCurrentPost(state, id),
  };
};

function PostDetailsContainer({
  state,
  id,
  suggestedPosts,
  postDetails,
}: {
  state: RootState;
  id: string;
  suggestedPosts: PostModal[] | undefined;
  postDetails: PostModal | undefined;
}) {
  return (
    <PostDetails
      suggestedPosts={selectSuggestPosts(state, id)}
      id={id}
      postDetails={selectCurrentPost(state, id)}
    />
  );
}

export default connect(mapStateToProps)(PostDetailsContainer);
