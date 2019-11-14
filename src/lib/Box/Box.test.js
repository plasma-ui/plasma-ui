import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

import Box from "./";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Box />, div);
});

it("renders correctly with matching snapshot", () => {
  const tree = renderer.create(<Box />).toJSON();
  expect(tree).toMatchSnapshot();
});
