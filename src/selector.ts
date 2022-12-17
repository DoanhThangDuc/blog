import { createSelector } from "reselect";
import { PostModal } from "./features/PostsSlice";
import { RootState } from "./store";

export const renameKey = (object: any, oldKey: string, newKey: string) => {
  object[newKey] = JSON.parse(JSON.stringify(object[oldKey]));
  delete object[oldKey];
  return object;
};

export const findPostId = (url: string) => {
  let postId = url;
  if (postId.lastIndexOf("/") === postId.length - 1) {
    const id = postId.substring(0, postId.lastIndexOf("/"));
    postId = id.substring(id.lastIndexOf("/") + 1, id.length);
  }
  postId = postId.substring(postId.lastIndexOf("/") + 1, postId.length);
  return postId.trim();
};

export const limitParagraph = (str: string, num: number) => {
  const { length } = str;
  if (num < length) {
    return str.slice(0, num) + "...";
  }
  return str;
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
      return findPostId(post.url).toString() === id;
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
