import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

import Flexbox from "./";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Flexbox />, div);
});

it("renders correctly with matching snapshot", () => {
  const tree = renderer.create(<Flexbox />).toJSON();
  expect(tree).toMatchSnapshot();
});
