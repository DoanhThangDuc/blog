import React from "react";
import { connect } from "react-redux";
import Home from "../pages/Home/Home";
import { selectPostsBySubject } from "../selector";
import { RootState } from "../store";
import { mapStateToProps } from "./PostDetailsContainer";

function TravelContainer({ state }: { state: RootState }) {
  return <Home posts={selectPostsBySubject(state, "TRAVEL")} />;
}

export default connect(mapStateToProps)(TravelContainer);
