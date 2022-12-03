import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PostDetails from "../pages/postDetails/PostDetails";
import { RootState } from "../store";

function PostDetailsContainer() {
  const { id } = useParams();
  const posts = useSelector((state: RootState) => state.posts);
  const currentPost = useMemo(() => {
    const result = posts.find((post) => {
      return post.id.toString() === id;
    });
    return result;
  }, [id]);

  const suggestedPosts = useMemo(() => {
    return posts
      .filter((post) => post.subject === currentPost?.subject)
      .slice(0, 3);
  }, []);

  return (
    <PostDetails {...currentPost} suggestedPosts={suggestedPosts} id={id} />
  );
}

export default PostDetailsContainer;
