import React from "react";
import Post, { PostModal } from "../../components/post/Post";
import { LifeStylePage, PostContainer } from "./LifeStyle.styled";
import PostDetails, { PostDetailsProps } from "../postDetails/PostDetails";

function LifeStyle({ posts }: { posts: PostModal[] }) {
  return (
    <LifeStylePage>
      <PostContainer>
        {posts.map((post) => (
          <Post {...post} key={post.id} />
        ))}
      </PostContainer>
    </LifeStylePage>
  );
}

export default LifeStyle;
