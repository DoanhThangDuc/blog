import { memo, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  PostDetailStyled, Container, BodyContainer, PostBody, PersionalDetails,
  References, ImgContainer, Img, Details, Subject, Title, Content, ImgDetails,
  Quote, Share, ImgDetail, GoogleIcon, Ticon, SocialContainer, RefContainer,
  RefTitle, RefPosts, RefPost, RefTitleContainer
} from "./PostDetails.styled";
import Post, { PostModal } from "../../components/post/Post";
import PostsChart from "../../components/postsChart/PostsChart";
import {
  FacebookIcon,
  TwitterIcon,
} from "../../components/footer/Footer.styled";
import Comment from "../../components/comment/Comment";
import Header from "../../components/header/Header";

export interface PostDetailsProps {
  img?: string;
  title?: string;
  subject?: string;
  description?: string;
}
function PostDetails({
  suggestedPosts,
  id,
  ...postDetails
}: PostDetailsProps & {
  suggestedPosts: PostModal[];
  id: string | number | undefined;
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <>
      <Header />
      <PostDetailStyled>
        <Container>
          <ImgContainer>
            <Img src={postDetails.img} alt="post-image" />
          </ImgContainer>
          <BodyContainer>
            <Details>
              <PostBody>
                <Subject>{postDetails.subject}</Subject>
                <Title>{postDetails.title}</Title>
                <Content>{postDetails.description}</Content>
                <ImgDetails>
                  <ImgDetail src="" />
                  <ImgDetail src="" />
                  <ImgDetail src="" />
                </ImgDetails>
                <Quote>{postDetails.description}</Quote>
                <Content>{postDetails.description}</Content>
                <Share>
                  <SocialContainer>
                    <p>SHARE</p>
                    <FacebookIcon size={"1.2rem"} color="#bab4b4" />
                    <TwitterIcon size={"1.2rem"} color="#bab4b4" />
                    <GoogleIcon size={"1.2rem"} />
                    <Ticon size={"1.2rem"} />
                  </SocialContainer>
                </Share>
              </PostBody>
              <PersionalDetails>
                <Post
                  id={1}
                  img="/images/coffee.png"
                  title="About me"
                  subject="Title"
                  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
                />
                <PostsChart
                  title="A day exploring the Alps"
                  commentNumber={2}
                  src="/images/banner.png"
                />
              </PersionalDetails>
            </Details>
          </BodyContainer>
        </Container>
        <References>
          <RefContainer>
            <RefTitleContainer>
              <RefTitle>YOU MAY ALSO LIKE</RefTitle>
            </RefTitleContainer>
            <RefPosts>
              {suggestedPosts.map((post) => {
                return (
                  <Link to={`/posts/${post.id}`} key={post.id}>
                    <RefPost key={post.id}>
                      <Post
                        id={post.id}
                        img={post.img}
                        title={post.title}
                        subject={post.subject}
                        description={post.description}
                      />
                    </RefPost>
                  </Link>
                );
              })}
            </RefPosts>
          </RefContainer>
        </References>
        <Comment
          src="/images/coffee.png"
          author="John Doe"
          description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo!"
          numberComment={1}
        />
      </PostDetailStyled>
    </>
  );
}

export default memo(PostDetails);
