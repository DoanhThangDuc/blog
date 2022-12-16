import React from "react";
import { PostModal } from "../../features/PostsSlice";
import {
  PostContainer,
  PostContent,
  PostImg,
  PostSubject,
  PostTitle,
  PostStyled,
} from "./Post.styled";

function Post({ post }: { post: PostModal }) {
  return (
    <PostStyled>
      <PostImg src={post.urlToImage} />
      <PostContainer>
        <PostSubject>{post.source.name}</PostSubject>
        <PostTitle>{post.title}</PostTitle>
        <PostContent>
          <p>{post.description}</p>
        </PostContent>
      </PostContainer>
    </PostStyled>
  );
}

export default Post;
