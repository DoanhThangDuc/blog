import React, { useEffect } from "react";
import {
  PostDetailStyled, Container, BodyContainer, PostBody, PersionalDetails,
  References, ImgContainer, Img, Details, Subject, Title, Content, ImgDetails,
  Quote, Share, ImgDetail, GoogleIcon, Ticon, SocialContainer, RefContainer,
  RefTitle, RefPosts, RefPost, RefTitleContainer, ReturnBtn, Return
} from "./PostDetails.styled";
import Post, { PostModal } from "../../components/post/Post";
import PostsChart from "../../components/postsChart/PostsChart";
import {
  FacebookIcon,
  TwitterIcon,
} from "../../components/footer/Footer.styled";
import Comment from "../../components/comment/Comment";

export interface PostDetailsProps {
  img?: string;
  title?: string;
  subject?: string;
  description?: string;
}
function PostDetails({
  img,
  title,
  subject,
  description,
  closeDetails,
  openDetails,
  suggestedPosts,
  scrollToTop,
}: PostDetailsProps & {
  closeDetails: () => void;
  openDetails: (id: number) => void;
  suggestedPosts: PostModal[];
  scrollToTop: number;
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [scrollToTop]);

  return (
    <PostDetailStyled>
      <Container>
        <ImgContainer>
          <Img src={img} alt="post-image" />
        </ImgContainer>
        <BodyContainer>
          <Details>
            <PostBody>
              <Subject>{subject}</Subject>
              <Title>{title}</Title>
              <Content>{description}</Content>
              <ImgDetails>
                <ImgDetail src="" />
                <ImgDetail src="" />
                <ImgDetail src="" />
              </ImgDetails>
              <Quote>{description}</Quote>
              <Content>{description}</Content>
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
                openDetails={openDetails}
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
      <ReturnBtn onClick={() => closeDetails()}>
        <Return>Return</Return>
      </ReturnBtn>
      <References>
        <RefContainer>
          <RefTitleContainer>
            <RefTitle>YOU MAY ALSO LIKE</RefTitle>
          </RefTitleContainer>
          <RefPosts>
            {suggestedPosts.map((post) => (
              <RefPost key={post.id}>
                <Post
                  openDetails={openDetails}
                  id={post.id}
                  img={post.img}
                  title={post.title}
                  subject=""
                  description=""
                />
              </RefPost>
            ))}
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
  );
}

export default PostDetails;
