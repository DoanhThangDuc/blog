import { createSelector } from "reselect";
import { PostModal } from "./features/PostsSlice";
import { RootState } from "./store";

const selectAllPosts = (state: RootState) => state.posts.posts;
const selectPostById = (state: RootState, id: string | number | undefined) =>
  id;

export const selectPosts = createSelector([selectAllPosts], (posts) => posts);

export const selectCurrentPost = createSelector(
  [selectAllPosts, selectPostById],
  (posts, id) => {
    return posts.find((post: PostModal) => post.source.name.toString() === id);
  }
);

export const selectSuggestPosts = createSelector(
  [selectAllPosts, selectCurrentPost],
  (posts, currentPost) => {
    return posts
      .filter((post: PostModal) => post.title === currentPost?.title)
      .slice(0, 3);
  }
);
export const selectPostsBySubject = createSelector(
  [selectAllPosts, (state: RootState, subject: string) => subject],
  (posts, subject) => {
    return posts.filter((post) => post.title === subject);
  }
);
