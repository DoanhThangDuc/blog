import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./features/PostsSlice";
import postDetailsReducer from "./features/PostDetailsSlice";

const store = configureStore({
  reducer: {
    posts: postsReducer,
    postDetails: postDetailsReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
