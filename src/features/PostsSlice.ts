import { createSlice } from "@reduxjs/toolkit";
import { PostModal } from "../components/post/Post";

const initialState = [
  {
    id: 2,
    img: "/images/postimg.png",
    subject: "LIFESTYLE",
    title: "More than just a music festival",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
  },
  {
    id: 3,
    img: "/images/coffee.png",
    subject: "LIFESTYLE",
    title: "Life tastes better with coffee",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
  },
  {
    id: 4,
    img: "/images/bridge.png",
    subject: "PHOTODIARY",
    title: "American dream",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
  },
  {
    id: 5,
    img: "/images/Alps.png",
    subject: "LIFESTYLE",
    title: "A day exploring the Alps",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
  },
  {
    id: 6,
    img: "/images/top10song.png",
    subject: "LIFESTYLE",
    title: "Top 10 songs for running",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
  },
  {
    id: 7,
    img: "/images/coldroad.png",
    subject: "LIFESTYLE",
    title: "Cold winter days",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
  },
];
export const postsSlice = createSlice({
  name: "posts",
  initialState: initialState as PostModal[],
  reducers: {},
});

export const {} = postsSlice.actions;
export type PostActionTypes = typeof postsSlice.actions;
export default postsSlice.reducer;
