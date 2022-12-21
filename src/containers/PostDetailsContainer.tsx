import React from "react";
import { connect } from "react-redux";
import { PostModal } from "../features/PostsSlice";
import PostDetails from "../pages/postDetails/PostDetails";
import {
  selectCurrentPost,
  selectFetchErrorMessage,
  selectFetchStatus,
  selectSuggestPosts,
} from "../selector";
import { RootState } from "../store";

export const mapStateToProps = (state: RootState) => {
  const id = state.router.location.pathname.replace("/posts/", "").trim();
  return {
    id: id,
    errorMessage: selectFetchErrorMessage(state),
    status: selectFetchStatus(state),
    state: state,
    suggestedPosts: selectSuggestPosts(state, id),
    postDetails: selectCurrentPost(state, id),
  };
};

function PostDetailsContainer({
  id,
  suggestedPosts,
  postDetails,
}: {
  state: RootState;
  id: string;
  suggestedPosts: PostModal[];
  postDetails: PostModal | undefined;
}) {
  return (
    <PostDetails
      suggestedPosts={suggestedPosts}
      id={id}
      postDetails={postDetails}
    />
  );
}

export default connect(mapStateToProps)(PostDetailsContainer);
