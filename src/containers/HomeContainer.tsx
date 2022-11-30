import React from "react";
import { useSelector } from "react-redux";
import Home from "../pages/Home/Home";
import { RootState } from "../store";

function HomeContainer() {
  const posts = useSelector((state: RootState) => state.posts);
  return <Home posts={posts} />;
}

export default HomeContainer;
