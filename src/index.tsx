import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ConnectedRouter } from "connected-react-router";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";
import { history } from "./utils";
import { fetchPosts } from "./features/PostsSlice";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

store.dispatch(fetchPosts())

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>
);
