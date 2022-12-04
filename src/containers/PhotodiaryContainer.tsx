import React from "react";
import { connect } from "react-redux";
import Home from "../pages/Home/Home";
import { selectPostsBySubject } from "../selector";
import { RootState } from "../store";
import { mapStateToProps } from "./PostDetailsContainer";

function PhotodiaryContainer({ state }: { state: RootState }) {
  return <Home posts={selectPostsBySubject(state, "PHOTODIARY")} />;
}

export default connect(mapStateToProps)(PhotodiaryContainer);
