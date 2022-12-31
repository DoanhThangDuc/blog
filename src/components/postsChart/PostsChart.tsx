import { PostModal } from "../../features/PostsSlice";
import { StyledLink } from "../../pages/Home/Home.styled";
import {
  PostSubject,
  PostsChartStyled,
  ChartContent,
  Title,
  CommentNumber,
  ChartList,
  PostChart,
  Banner,
} from "./PostsChart.styled";

export interface PostsChartProps {
  commentNumber: number;
  src: string;
  postsChart: PostModal[] | undefined;
}
function PostsChart({ commentNumber, src, postsChart }: PostsChartProps) {
  return (
    <PostsChartStyled>
      <PostSubject>TOP POSTS</PostSubject>
      <ChartContent>
        {postsChart?.map((post) => (
          <ChartList key={post.id}>
            <PostChart>
              <StyledLink to={`/posts/${post.id}`}>
                <Title>{post.title}</Title>
              </StyledLink>
              <CommentNumber>{commentNumber + " COMMENTS"}</CommentNumber>
            </PostChart>
          </ChartList>
        ))}
      </ChartContent>

      <Banner src={src} />
    </PostsChartStyled>
  );
}

export default PostsChart;
