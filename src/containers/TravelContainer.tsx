import React from "react";
import { useSelector } from "react-redux";
import Home from "../pages/Home/Home";
import { RootState } from "../store";

function TravelContainer() {
  const posts = useSelector((state: RootState) => state.posts).filter(
    (post) => post.subject === "TRAVEL"
  );
  return <Home posts={posts} />;
}

export default TravelContainer;
