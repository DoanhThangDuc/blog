import { memo } from "react";
import Post from "../../components/post/Post";
import { Link } from "react-router-dom";
import { HomeStyled, PostContainer } from "./Home.styled";
import Header from "../../components/header/Header";
import { PostModal } from "../../features/PostsSlice";

function Home({ posts }: { posts: PostModal[] }) {
  return (
    <>
      <Header />
      <HomeStyled>
        <PostContainer>
          {posts.map((post) => (
            <Link to={`/posts/${post.source.name}`} key={post.urlToImage+post.content}>
              <Post post={post}  />
            </Link>
          ))}
        </PostContainer>
      </HomeStyled>
    </>
  );
}

export default memo(Home);
