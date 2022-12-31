import { createSelector } from "reselect";
import { PostModal } from "./features/PostsSlice";
import { RootState } from "./store";

const selectAllPosts = (state: RootState) => state.posts.posts;
const selectPostDetailsId = (state: RootState) =>
  state.router.location.pathname.replace("/posts/", "").trim();

export const selectFetchStatus = (state: RootState) => state.posts.status;
export const selectFetchErrorMessage = (state: RootState) => state.posts.error;
export const selectUrlSubject = (state: RootState) => {
  return state.router.location.pathname.replace("/", "").trim();
};
export const selectPostsLimited = createSelector([selectAllPosts], (posts) => {
  const postsLimited = posts.slice(0, 20);
  const postsSorted = postsLimited.sort((post1, post2) => {
    return Date.parse(post1.publishedAt) - Date.parse(post2.publishedAt);
  });
  return postsSorted;
});

export const selectCurrentPost = createSelector(
  [selectAllPosts, selectPostDetailsId],
  (posts, id) => {
    return posts.find((post: PostModal) => {
      return post.id === id;
    });
  }
);

export const selectSuggestPosts = createSelector(
  [selectAllPosts, selectCurrentPost],
  (posts, currentPost) => {
    const suggestedPosts = posts
      .filter((post: PostModal) => {
        if (post.id === currentPost?.id) return;
        return (
          post.source.name.toLocaleUpperCase() ===
          currentPost?.source.name.toLocaleUpperCase()
        );
      })
      .slice(0, 3);
    return suggestedPosts;
  }
);
export const selectPostsBySubject = createSelector(
  [selectAllPosts, selectUrlSubject],
  (posts, subject) => {
    return posts.filter((post) => {
      return post.source.name
        .toLocaleUpperCase()
        .includes(subject.toLocaleUpperCase());
    });
  }
);
export const selectNewestPosts = createSelector([selectPostsLimited], (posts) =>
  posts.slice(0, 3)
);
