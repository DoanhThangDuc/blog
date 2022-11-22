import React from "react";
import Post, { PostModal } from "../../components/post/Post";
import { LifeStylePage, PostContainer } from "./LifeStyle.styled";
import PostDetails, { PostDetailsProps } from "../postDetails/PostDetails";
import { PostDetailsModal } from "../../features/PostDetailsSlice";

function LifeStyle({
  posts,
  postDetails,
  currentPost,
  openDetails,
  closeDetails,
  suggestedPosts,
}: {
  posts: PostModal[];
  postDetails: PostDetailsModal;
  currentPost?: PostDetailsProps;
  openDetails: (id: number) => void;
  closeDetails: () => void;
  suggestedPosts: PostModal[];
}) {
  return (
    <LifeStylePage>
      {!postDetails.isOpenDetails ? (
        <PostContainer>
          {posts.map((post) => (
            <Post {...post} key={post.id} openDetails={openDetails} />
          ))}
        </PostContainer>
      ) : (
        <PostDetails
          {...currentPost}
          suggestedPosts={suggestedPosts}
          scrollToTop={postDetails.id}
          closeDetails={closeDetails}
          openDetails={openDetails}
        />
      )}
    </LifeStylePage>
  );
}

export default LifeStyle;
