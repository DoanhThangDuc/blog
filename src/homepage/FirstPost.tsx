import React from "react";
import {
  FirstPostContent,
  FirstPostImg,
  Subject,
  Title,
  Comment,
  Content,
  FirstPostStyled,
} from "./FirstPost.styled";
import { PostProps } from "../components/post/Post";

function FirstPost({ img, title, subject, description }: PostProps) {
  return (
    <FirstPostStyled>
      <FirstPostImg>
        <img src={img ? img : "/images/firstPost.png"} alt="post-image" />
      </FirstPostImg>

      <FirstPostContent>
        <Subject>{subject ? subject : "PHOTODIARY"}</Subject>
        <Title>{title ? title : "The perfect weekend getaway"}</Title>
        <Content>
          {description === "empty"
            ? ""
            : "The perfect weekend getawayThe perfect weekend getawayThe perfectweekend getawayThe perfect weekend getawayThe perfect weekendgetawayThe perfect weekend getawayThe perfect weekend getawayTheperfect weekend getawayThe perfect weekend getawayThe perfect weekendgetawayThe perfect weekend getawaygetawayThe perfect weekendgetawayThe perfect weekend getawayThe perfect weekend getawayTheperfect weekend getawayThe perfect weekend getawayThe pegetawayTheperfect weekend getawayThe perfect weekend getawayThe perfect weekendgetawayThe perfect weekend getawayThe perfect weekend getawayThepegetawayThe perfect weekend getawayThe perfect weekend getawayTheperfect weekend getawayThe perfect weekend getawayThe perfect weekendgetawayThe pegetawayThe perfect weekend getawayThe perfect weekendgetawayThe perfect weekend getawayThe perfect weekend getawayTheperfect weekend getawayThe pe"}
        </Content>
        <Comment>LEAVE A COMMENT</Comment>
      </FirstPostContent>
    </FirstPostStyled>
  );
}

export default FirstPost;
