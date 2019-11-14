import styled from "@emotion/styled";
import propTypes from "@styled-system/prop-types";
import {
  createShouldForwardProp,
  props
} from "@styled-system/should-forward-prop";
import {
  space,
  layout,
  color,
  typography,
  grid,
  background,
  border,
  position,
  shadow,
  compose
} from "styled-system";

const shouldForwardProp = createShouldForwardProp([
  ...props,
  "willChange",
  "transform",
  "cursor"
]);

const Box = styled("div", {
  shouldForwardProp
})(
  props => ({
    willChange: props.willChange,
    transform: props.transform,
    cursor: props.cursor
  }),
  {
    boxSizing: "border-box"
  },
  compose(
    space,
    layout,
    color,
    typography,
    grid,
    background,
    border,
    position,
    shadow
  )
);

Box.propTypes = {
  ...propTypes.color,
  ...propTypes.space,
  ...propTypes.layout,
  ...propTypes.color,
  ...propTypes.typography,
  ...propTypes.grid,
  ...propTypes.background,
  ...propTypes.border,
  ...propTypes.position,
  ...propTypes.shadow
};

export default Box;
