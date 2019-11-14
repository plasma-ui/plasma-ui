import styled from "@emotion/styled";
import propTypes from "@styled-system/prop-types";
import {
  createShouldForwardProp,
  props
} from "@styled-system/should-forward-prop";
import {
  flexbox,
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
  "dir",
  "justify",
  "align",
  "transform",
  "cursor"
]);

const ListItem = styled("li", {
  shouldForwardProp
})(
  props => ({
    flexDirection: props.dir,
    justifyContent: props.justify,
    alignItems: props.align,
    transform: props.transform,
    cursor: props.cursor
  }),
  {
    boxSizing: "border-box"
  },
  compose(
    flexbox,
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

ListItem.propTypes = {
  ...propTypes.flexbox,
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

export default ListItem;
