import React from "react";
import {
  PostContainer,
  PostContent,
  PostImg,
  PostSubject,
  PostTitle,
  PostStyled,
} from "./Post.styled";

export interface PostProps {
  img: string;
  title: string;
  subject: string;
  description: string;
}

function Post({ img, title, subject, description }: PostProps) {
  return (
    <PostStyled>
      <PostImg>
        <img src={img || "/images/postimg.png"} alt="post-picture" />
      </PostImg>

      <PostContainer>
        <PostSubject>{subject ? subject : "LIFESTYLE"}</PostSubject>
        <PostTitle>{title || "More than just a music festival"}</PostTitle>
        <PostContent>
          <p>
            {description === "empty"
              ? ""
              : "The perfect weekend getawayThe perfect weekend getawayThe perfect weekend getawayThe perfect weekend getawayThe perfect weekendgetawayThe perfect weekend getawayThe perfect weekend getawayTheperfect weekend getawayThe perfecweekend getawayThe perfect weekendperfect weekend getawayThe perfecweekend getawayThe perfect weekendperfect weekend getawayThe perfecweekend getawayThe perfect weekend"}
          </p>
        </PostContent>
      </PostContainer>
    </PostStyled>
  );
}

export default Post;
