import React from "react";
import { useSelector } from "react-redux";
import Home from "../pages/Home/Home";
import { RootState } from "../store";

function LifeStyleContainer() {
  const posts = useSelector((state: RootState) => state.posts).filter(
    (post) => post.subject === "LIFESTYLE"
  );
  return <Home posts={posts} />;
}

export default LifeStyleContainer;
