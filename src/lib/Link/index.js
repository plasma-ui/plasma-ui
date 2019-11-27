import styled from "@emotion/styled";
import { string } from "prop-types";
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
  "cursor",
  "dir",
  "justify",
  "align",
  "textDecoration"
]);

const Link = styled("a", {
  shouldForwardProp
})(
  props => ({
    flexDirection: props.dir,
    justifyContent: props.justify,
    alignItems: props.align,
    willChange: props.willChange,
    transform: props.transform,
    cursor: props.cursor,
    textDecoration: props.textDecoration
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
    background,
    border,
    position,
    shadow
  )
);

Link.defaultProps = {
  cursor: "pointer",
  dir: "",
  justify: "",
  align: "",
  willChange: null,
  textDecoration: "",
  transform: null
};

Link.propTypes = {
  dir: string,
  justify: string,
  align: string,
  willChange: string,
  textDecoration: string,
  transform: string,
  cursor: string,
  ...propTypes.flexbox,
  ...propTypes.space,
  ...propTypes.layout,
  ...propTypes.color,
  ...propTypes.typography,
  ...propTypes.background,
  ...propTypes.border,
  ...propTypes.position,
  ...propTypes.shadow
};

export default Link;
