import { createSelector } from "reselect";
import { RootState } from "./store";
import { PostModal } from "./components/post/Post";

const selectAllPosts = (state: RootState) => state.posts;
const selectPostById = (state: RootState, id: string | undefined) => id;

export const selectPosts = createSelector([selectAllPosts], (posts) => posts);

export const selectCurrentPost = createSelector(
  [selectAllPosts, selectPostById],
  (posts, id) => {
    return posts.find((post: PostModal) => post.id.toString() === id);
  }
);

export const selectSuggestPosts = createSelector(
  [selectAllPosts, selectCurrentPost],
  (posts, currentPost) => {
    return posts
      .filter((post: PostModal) => post.subject === currentPost?.subject)
      .slice(0, 3);
  }
);
export const selectPostsBySubject = createSelector(
  [selectAllPosts, (state: RootState, subject: string) => subject],
  (posts, subject) => {
    return posts.filter((post) => post.subject === subject);
  }
);
