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
  "align"
]);

const Banner = styled("header", {
  shouldForwardProp
})(
  props => ({
    flexDirection: props.dir,
    justifyContent: props.justify,
    alignItems: props.align
  }),
  {
    boxSizing: "border-box",
    minWidth: 0
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

Banner.defaultProps = {
  display: "flex"
};

Banner.propTypes = {
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

export default Banner;
