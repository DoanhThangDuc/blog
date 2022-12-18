import { createSelector } from "reselect";
import { PostModal } from "./features/PostsSlice";
import { parsePostIdFromUrl } from "./helpers/parsePostIdFromUrl";
import { RootState } from "./store";

export const renameKey = (object: any, oldKey: string, newKey: string) => {
  object[newKey] = JSON.parse(JSON.stringify(object[oldKey]));
  delete object[oldKey];
  return object;
};

const selectAllPosts = (state: RootState) => state.posts.posts;
const selectPostById = (state: RootState, id: string | number | undefined) =>
  id;

export const selectFetchStatus = (state: RootState) => state.posts.status;

export const selectPosts = createSelector([selectAllPosts], (posts) =>
  posts.slice(0, 20)
);

export const selectCurrentPost = createSelector(
  [selectAllPosts, selectPostById],
  (posts, id) => {
    return posts.find((post: PostModal) => {
      return parsePostIdFromUrl(post.url).toString() === id;
    });
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
