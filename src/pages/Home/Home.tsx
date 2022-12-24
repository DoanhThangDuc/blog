import { memo, useEffect, useState } from "react";
import Post from "../../components/post/Post";
import {
  HomeStyled,
  PostContainer,
  Status,
  StyledLink,
  TopBtn,
} from "./Home.styled";
import Header from "../../components/header/Header";
import { PostModal } from "../../features/PostsSlice";
import Loading from "../Loading";
import ErrorPage from "../ErrorPage";
import { parsePostIdFromUrl } from "../../helpers/parsePostIdFromUrl";

function Home({
  posts,
  status,
  errorMessage,
}: {
  posts: PostModal[];
  status?: string;
  errorMessage?: string | null;
}) {
  const [shouldTopBtnVisible, setShouldTopBtnVisible] =
    useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 1000) {
        setShouldTopBtnVisible(true);
        return;
      }
      setShouldTopBtnVisible(false);
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
        <Status>
          {status !== ("pending" || "idle") && (
            <ErrorPage message={errorMessage} />
          )}
          {status === "pending" && <Loading />}
        </Status>
        <PostContainer>
          {posts.map((post) => {
            return (
              <StyledLink
                to={`/posts/${parsePostIdFromUrl(post.url).toString()}`}
                key={post.url}
              >
                <Post post={post} />
              </StyledLink>
            );
          })}
        </PostContainer>
        {shouldTopBtnVisible && <TopBtn size={40} onClick={scrollToTop} />}
      </HomeStyled>
    </>
  );
}

export default memo(Home);
