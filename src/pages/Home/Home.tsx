import { memo, useEffect, useState } from "react";
import Post from "../../components/post/Post";
import { Link } from "react-router-dom";
import { HomeStyled, PostContainer, TopBtn } from "./Home.styled";
import Header from "../../components/header/Header";
import { PostModal } from "../../features/PostsSlice";
import Loading from "../Loading";
import { findPostId } from "../../selector";
import ErrorPage from "../ErrorPage";

function Home({ posts, status }: { posts: PostModal[]; status?: string }) {
  const [scrollTop, setScrollTop] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 1000) {
        setScrollTop(true);
        return;
      }
      setScrollTop(false);
    });
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Header />
      <HomeStyled>
        {status === "pending" && <Loading />}
        {status !== ("pending" || "idle") && <ErrorPage message={status}/> }
        <PostContainer>
          {posts.map((post) => (
            <Link to={`/posts/${findPostId(post.url)}`} key={post.url}>
              <Post post={post} />
            </Link>
          ))}
        </PostContainer>
        {scrollTop && <TopBtn size={40} onClick={scrollToTop} />}
      </HomeStyled>
    </>
  );
}

export default memo(Home);

// format style Post.tsx
