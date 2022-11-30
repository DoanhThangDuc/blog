import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { PostModal } from "../components/post/Post";
import PostDetails from "../pages/postDetails/PostDetails";
import { RootState } from "../store";

const mapStateToProps = (state: RootState) => ({
  posts: state.posts,
});

function PostDetailsContainer({ posts }: { posts: PostModal[] }) {
  const { id } = useParams();
  const currentPost = posts.find((post) => post.id.toString() === id);
  const suggestedPosts = posts
    .filter((post) => post.subject === currentPost?.subject)
    .slice(0, 3);
  return (
    <PostDetails {...currentPost} suggestedPosts={suggestedPosts} id={id} />
  );
}

export default connect(mapStateToProps)(PostDetailsContainer);
