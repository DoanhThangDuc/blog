import { connect } from "react-redux";
import { PostModal } from "../features/PostsSlice";
import PostDetails from "../pages/postDetails/PostDetails";
import {
  selectCurrentPost,
  selectFetchErrorMessage,
  selectFetchStatus,
  selectPostsLimited,
  selectPostsBySubject,
  selectSuggestPosts,
  selectNewestPosts,
} from "../selector";
import { RootState } from "../store";

export const mapStateToProps = (state: RootState) => {
  return {
    state: state,
    cnbcPosts: selectPostsBySubject(state),
    posts: selectPostsLimited(state),
    errorMessage: selectFetchErrorMessage(state),
    status: selectFetchStatus(state),
    suggestedPosts: selectSuggestPosts(state),
    postDetails: selectCurrentPost(state),
    postsChart: selectNewestPosts(state),
  };
};

function PostDetailsContainer({
  suggestedPosts,
  postDetails,
  status,
  postsChart,
}: {
  suggestedPosts: PostModal[];
  postDetails: PostModal | undefined;
  status: "idle" | "pending" | "rejected";
  postsChart: PostModal[] | undefined;
}) {
  return (
    <PostDetails
      suggestedPosts={suggestedPosts}
      id={postDetails?.id}
      postDetails={postDetails}
      status={status}
      postsChart={postsChart}
    />
  );
}

export default connect(mapStateToProps)(PostDetailsContainer);
