import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PostDetailsModal {
  isOpenDetails: boolean;
  id: number;
}
export const postsSlice = createSlice({
  name: "posts",
  initialState: { isOpenDetails: false } as PostDetailsModal,
  reducers: {
    openDetails: (state, action: PayloadAction<number>) => {
      return { ...state, id: action.payload, isOpenDetails: true };
    },
    closeDetails: (state) => {
      return { ...state, isOpenDetails: false };
    },
  },
});

export const { openDetails, closeDetails } = postsSlice.actions;
export type PostActionTypes = typeof postsSlice.actions;
export default postsSlice.reducer;
