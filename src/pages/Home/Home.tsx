import React, { memo } from "react";
import Post, { PostModal } from "../../components/post/Post";
import { Link } from "react-router-dom";
import { HomeStyled, PostContainer } from "./Home.styled";
import Header from "../../components/header/Header";

function Home({ posts }: { posts: PostModal[] }) {
  return (
    <>
      <Header />
      <HomeStyled>
        <PostContainer>
          {posts.map((post) => (
            <Link to={`/posts/${post.id}`} key={post.id}>
              <Post {...post} key={post.id} />
            </Link>
          ))}
        </PostContainer>
      </HomeStyled>
    </>
  );
}

export default memo(Home);
