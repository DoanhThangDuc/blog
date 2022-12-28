import { connect } from "react-redux";
import { PostModal } from "../features/PostsSlice";
import PostDetails from "../pages/postDetails/PostDetails";
import {
  selectCurrentPost,
  selectFetchErrorMessage,
  selectFetchStatus,
  selectPosts,
  selectSuggestPosts,
} from "../selector";
import { RootState } from "../store";

export const mapStateToProps = (state: RootState) => {
  return {
    state: state,
    posts: selectPosts(state),
    errorMessage: selectFetchErrorMessage(state),
    status: selectFetchStatus(state),
    suggestedPosts: selectSuggestPosts(state),
    postDetails: selectCurrentPost(state),
  };
};

function PostDetailsContainer({
  suggestedPosts,
  postDetails,
  status,
}: {
  suggestedPosts: PostModal[];
  postDetails: PostModal | undefined;
  status: string;
}) {
  return (
    <PostDetails
      suggestedPosts={suggestedPosts}
      id={postDetails?.source.id}
      postDetails={postDetails}
      status={status}
    />
  );
}

export default connect(mapStateToProps)(PostDetailsContainer);
