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
  "transform"
]);

const Navbar = styled("nav", {
  shouldForwardProp
})(
  props => ({
    flexDirection: props.dir,
    justifyContent: props.justify,
    alignItems: props.align,
    transform: props.transform
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

Navbar.defaultProps = {
  display: "flex"
};

Navbar.propTypes = {
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

export default Navbar;
