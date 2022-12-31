import React from "react";
import Home from "../pages/Home/Home";
import { RootState } from "../store";
import { selectPostsBySubject } from "../selector";
import { connect } from "react-redux";
import { mapStateToProps } from "./PostDetailsContainer";

function CnnContainer({ state }: { state: RootState }) {
  return <Home posts={selectPostsBySubject(state)} />;
}

export default connect(mapStateToProps)(CnnContainer);
