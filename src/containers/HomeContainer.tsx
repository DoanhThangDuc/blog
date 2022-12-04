import React from "react";
import { connect } from "react-redux";
import Home from "../pages/Home/Home";
import { selectPosts } from "../selector";
import { RootState } from "../store";
import { mapStateToProps } from "./PostDetailsContainer";

function HomeContainer({ state }: { state: RootState }) {
  return <Home posts={selectPosts(state)} />;
}

export default connect(mapStateToProps)(HomeContainer);
