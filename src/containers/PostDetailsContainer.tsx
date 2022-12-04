import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import PostDetails from "../pages/postDetails/PostDetails";
import { selectCurrentPost, selectSuggestPosts } from "../selector";
import { RootState } from "../store";

export const mapStateToProps = (state: RootState) => ({ state: state });

function PostDetailsContainer({ state }: { state: RootState }) {
  const { id } = useParams();
  return (
    <PostDetails
      suggestedPosts={selectSuggestPosts(state, id)}
      id={id}
      {...selectCurrentPost(state, id)}
    />
  );
}

export default connect(mapStateToProps)(PostDetailsContainer);
