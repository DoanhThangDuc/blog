import React from "react";
import {
  PostContainer,
  PostContent,
  PostImg,
  PostSubject,
  PostTitle,
  PostStyled,
} from "./Post.styled";

export interface PostModal {
  id: number;
  img: string;
  title: string;
  subject: string;
  description: string;
}

function Post({
  id,
  img,
  title,
  subject,
  description,
  openDetails,
}: PostModal & { openDetails: (id: number) => void }) {
  return (
    <PostStyled onClick={() => openDetails(id)}>
      <PostImg src={img}></PostImg>
      <PostContainer>
        <PostSubject>{subject}</PostSubject>
        <PostTitle>{title}</PostTitle>
        <PostContent>
          <p>{description}</p>
        </PostContent>
      </PostContainer>
    </PostStyled>
  );
}

export default Post;
