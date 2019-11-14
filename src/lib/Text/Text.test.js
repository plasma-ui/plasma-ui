import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

import Text from "./";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Text>This is a text</Text>, div);
});

it("renders correctly with matching snapshot", () => {
  const tree = renderer.create(<Text />).toJSON();
  expect(tree).toMatchSnapshot();
});
