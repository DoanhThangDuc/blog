import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { renameKey } from "../helpers/renameKey";

interface PostSliceProps {
  status: "idle" | "pending" | "rejected";
  posts: PostModal[];
  error: string | null;
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
  "https://newsapi.org/v2/everything?q=tesla&from=2022-11-24&sortBy=publishedAt&apiKey=1b4b963ff661428ebe4b361015bd015c";

export const postsSlice = createSlice({
  name: "posts",
  initialState: { status: "pending", posts: [], error: null } as PostSliceProps,
  reducers: {
    populatePosts: (state, action) => {
      return { ...state, posts: [...action.payload], status: "idle" };
    },
    handleFetchError: (state, action) => {
      const message = action.payload.message;
      return { ...state, status: "rejected", error: message };
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchPosts.pending, (state: PostSliceProps, action) => {
  //       return { ...state, status: "pending" };
  //     })
  //     .addCase(fetchPosts.fulfilled, (state: PostSliceProps, action) => {
  //       return { ...state, status: "idle", posts: [...action.payload] };
  //     })
  //     .addCase(fetchPosts.rejected, (state: PostSliceProps, action: any) => {
  //       const message = action.payload.message;
  //       return { ...state, status: "rejected", posts: [], error: message };
  //     });
  // },
});

// export const fetchPosts = createAsyncThunk(
//   "posts/fetchPosts",
//   async (arg, thunkAPI) => {
//     try {
//       const result = await axios.get(POST_URL);
//       const posts = result.data.articles.map((article: PostModal) =>
//         renameKey(article, "urlToImage", "imageUrl")
//       );
//       return posts;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// Use promise solution to fetch Posts,
// in the case of using it, pls comment the fetchPosts and extraReducers above

export const fetchPosts = () => {
  return (dispatch: any, getState: any) => {
    const response = axios
      .get(POST_URL)
      .then((response) => {
        const posts = response.data.articles.map((article: PostModal) =>
          renameKey(article, "urlToImage", "imageUrl")
        );
        dispatch(postsSlice.actions.populatePosts(posts));
      })
      .catch((error) => dispatch(postsSlice.actions.handleFetchError(error)));
    return response;
  };
};

export const { populatePosts, handleFetchError } = postsSlice.actions;
export type PostActionTypes = typeof postsSlice.actions;
export default postsSlice.reducer;
