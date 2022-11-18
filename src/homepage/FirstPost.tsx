import React from "react";
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
import { PostProps } from "../components/post/Post";

function FirstPost({ img, title, subject, description }: PostProps) {
  return (
    <FirstPostStyled>
      <FirstPostImg>
        <Img src={img} alt="post-image" />
      </FirstPostImg>
      <FirstPostContent>
        <Subject>{subject}</Subject>
        <Title>{title}</Title>
        <Content>{description}</Content>
        <Comment>LEAVE A COMMENT</Comment>
      </FirstPostContent>
    </FirstPostStyled>
  );
}

export default FirstPost;
