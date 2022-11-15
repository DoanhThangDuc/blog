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

function FirstPost() {
  return (
    <FirstPostStyled>
      <FirstPostImg>
        <img src="/images/firstPost.png" />
      </FirstPostImg>

      <FirstPostContent>
        <Subject>PHOTODIARY</Subject>
        <Title>The perfect weekend getaway</Title>
        <Content>
          The perfect weekend getawayThe perfect weekend getawayThe perfect
          weekend getawayThe perfect weekend getawayThe perfect weekend
          getawayThe perfect weekend getawayThe perfect weekend getawayThe
          perfect weekend getawayThe perfect weekend getawayThe perfect weekend
          getawayThe perfect weekend getawaygetawayThe perfect weekend
          getawayThe perfect weekend getawayThe perfect weekend getawayThe
          perfect weekend getawayThe perfect weekend getawayThe pegetawayThe
          perfect weekend getawayThe perfect weekend getawayThe perfect weekend
          getawayThe perfect weekend getawayThe perfect weekend getawayThe
          pegetawayThe perfect weekend getawayThe perfect weekend getawayThe
          perfect weekend getawayThe perfect weekend getawayThe perfect weekend
          getawayThe pegetawayThe perfect weekend getawayThe perfect weekend
          getawayThe perfect weekend getawayThe perfect weekend getawayThe
          perfect weekend getawayThe pe
        </Content>
        <Comment>LEAVE A COMMENT</Comment>
      </FirstPostContent>
    </FirstPostStyled>
  );
}

export default FirstPost;
