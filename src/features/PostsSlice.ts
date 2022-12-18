import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { renameKey } from "../selector";

// const posts = [
//   {
//     id: 2,
//     img: "/images/postimg.png",
//     subject: "LIFESTYLE",
//     title: "More than just a music festival",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
//   },
//   {
//     id: 3,
//     img: "/images/coffee.png",
//     subject: "LIFESTYLE",
//     title: "Life tastes better with coffee",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
//   },
//   {
//     id: 4,
//     img: "/images/bridge.png",
//     subject: "PHOTODIARY",
//     title: "American dream",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
//   },
//   {
//     id: 5,
//     img: "/images/Alps.png",
//     subject: "LIFESTYLE",
//     title: "A day exploring the Alps",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
//   },
//   {
//     id: 6,
//     img: "/images/top10song.png",
//     subject: "LIFESTYLE",
//     title: "Top 10 songs for running",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
//   },
//   {
//     id: 7,
//     img: "/images/coldroad.png",
//     subject: "LIFESTYLE",
//     title: "Cold winter days",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
//   },
// ];
interface PostSliceProps {
  status: string;
  posts: PostModal[];
}

export interface PostModal {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  publishedAt: string;
  content: string;
}

const POST_URL =
  "https://newsapi.org/v2/everything?q=tesla&from=2022-11-18&sortBy=publishedAt&apiKey=1b4b963ff661428ebe4b361015bd015c";
  // "https://newsapi.org/v2/everything?q=tesla&from=2022-11-18&sortBy=publishedAt&apiKey=5090c0e658b24579afe2aa8fd9c17222";

export const postsSlice = createSlice({
  name: "posts",
  initialState: { status: "idle", posts: [] } as PostSliceProps,
  reducers: {
    populatePosts: (state, action) => {
      return { ...state, posts: [...action.payload] };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state: PostSliceProps, action) => {
        return { ...state, status: "pending" };
      })
      .addCase(fetchPosts.fulfilled, (state: PostSliceProps, action) => {
        return { ...state, status: "idle", posts: [...action.payload] };
      })
      .addCase(fetchPosts.rejected, (state: PostSliceProps, action: any) => {
        const message = action.payload.message;
        return { ...state, status: message, posts: [] };
      });
  },
});

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (arg, thunkAPI) => {
    try {
      const result = await axios.get(POST_URL);
      const posts = result.data.articles.map((article: PostModal) =>
        renameKey(article, "urlToImage", "imageUrl")
      );
      return posts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// Use promise solution to fetch Posts,
// in the case of using it, pls comment the fetchPosts and extraReducers above

// export const fetchPosts = () => {
//   return (dispatch: any, getState: any) => {
//     const response = axios
//       .get(POST_URL)
//       .then((data) => {
//         const posts = data.data.articles;
//         dispatch(postsSlice.actions.populatePosts(posts));
//       })
//       .catch((error) => console.error(error));
//   };
// };

export const { populatePosts } = postsSlice.actions;
export type PostActionTypes = typeof postsSlice.actions;
export default postsSlice.reducer;
