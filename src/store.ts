import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { routerMiddleware, connectRouter } from "connected-react-router";
import { history } from "./utils";
import postsReducer from "./features/PostsSlice";

const rootReducer = combineReducers({
  router: connectRouter(history),
  posts: postsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(routerMiddleware(history)),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
