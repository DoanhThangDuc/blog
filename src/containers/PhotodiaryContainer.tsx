import React from "react";
import { useSelector } from "react-redux";
import Home from "../pages/Home/Home";
import { RootState } from "../store";

function PhotodiaryContainer() {
  const posts = useSelector((state: RootState) => state.posts).filter(
    (post) => post.subject === "PHOTODIARY"
  );
  return <Home posts={posts} />;
}

export default PhotodiaryContainer;
