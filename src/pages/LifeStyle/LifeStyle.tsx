import React from "react";
import { PostModal } from "../../components/post/Post";
import Post from "../../components/post/Post";
import { LifeStylePage, PostContainer } from "./LifeStyle.styled";

function LifeStyle({ posts }: { posts: PostModal[] }) {
  return (
    <LifeStylePage>
      <PostContainer>
        {posts.map((post) => (
          <Post {...post} />
        ))}
      </PostContainer>
    </LifeStylePage>
  );
}

export default LifeStyle;
