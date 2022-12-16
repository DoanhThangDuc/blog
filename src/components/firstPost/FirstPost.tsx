import React from "react";
import { PostModal } from "../../features/PostsSlice";
import {
  FirstPostContent,
  FirstPostImg,
  Subject,
  Title,
  Comment,
  Content,
  FirstPostStyled,
  Img,
} from "./FirstPost.styled";

function FirstPost(post: PostModal) {
  return (
    <FirstPostStyled>
      <FirstPostImg>
        <Img src={post.urlToImage} alt="post-image" />
      </FirstPostImg>
      <FirstPostContent>
        <Subject>{post.source.name}</Subject>
        <Title>{post.title}</Title>
        <Content>{post.description}</Content>
        <Comment>LEAVE A COMMENT</Comment>
      </FirstPostContent>
    </FirstPostStyled>
  );
}

export default FirstPost;
