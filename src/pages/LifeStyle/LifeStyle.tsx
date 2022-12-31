import React from "react";
import Post from "../../components/post/Post";
import { PostModal } from "../../features/PostsSlice";
import { LifeStylePage, PostContainer } from "./LifeStyle.styled";

function LifeStyle({ posts }: { posts: PostModal[] }) {
  return (
    <LifeStylePage>
      <PostContainer>
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </PostContainer>
    </LifeStylePage>
  );
}

export default LifeStyle;
