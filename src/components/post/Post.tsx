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
      <PostImg src={img ? img : ""}></PostImg>

      <PostContainer>
        <PostSubject>{subject ? subject : ""}</PostSubject>
        <PostTitle>{title ? title : ""}</PostTitle>
        <PostContent>
          <p>{description ? description : ""}</p>
        </PostContent>
      </PostContainer>
    </PostStyled>
  );
}

export default Post;
