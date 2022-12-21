import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from "@reduxjs/toolkit";
import { routerMiddleware, connectRouter } from "connected-react-router";
import { history } from "./utils";
import postsReducer from "./features/PostsSlice";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  router: connectRouter(history),
  posts: postsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk, routerMiddleware(history)),
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export default store;
