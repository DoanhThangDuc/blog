import React from "react";
import {
  PostContainer,
  PostContent,
  PostImg,
  PostSubject,
  PostTitle,
  PostStyled,
} from "./Post.styled";

function Post() {
  return (
    <PostStyled>
      <PostImg>
        <img src="/images/postimg.png" />
      </PostImg>

      <PostContainer>
        <PostSubject>LIFESTYLE</PostSubject>
        <PostTitle>More than just a music festival</PostTitle>
        <PostContent>
          <p>
            The perfect weekend getawayThe perfect weekend getawayThe perfect
            weekend getawayThe perfect weekend getawayThe perfect weekend
            getawayThe perfect weekend getawayThe perfect weekend getawayThe
            perfect weekend getawayThe perfecweekend getawayThe perfect weekend
            perfect weekend getawayThe perfecweekend getawayThe perfect weekend
            perfect weekend getawayThe perfecweekend getawayThe perfect weekend
          </p>
        </PostContent>
      </PostContainer>
    </PostStyled>
  );
}

export default Post;
