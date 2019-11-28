/** @jsx jsx */
import { jsx, css } from "@emotion/core";
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

const truncated = css({
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  overflow: "hidden"
});

const shouldForwardProp = createShouldForwardProp([
  ...props,
  "willChange",
  "transform",
  "cursor",
  "whiteSpace",
  "textOverflow"
]);

const StyledHeader = styled("h1", {
  shouldForwardProp
})(
  props => ({
    willChange: props.willChange,
    transform: props.transform,
    cursor: props.cursor,
    whiteSpace: props.whiteSpace,
    textOverflow: props.textOverflow
  }),
  {
    boxSizing: "border-box",
    margin: "0"
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

const Header = ({ truncate, ...rest }) => {
  return <StyledHeader css={truncate && truncated} {...rest} />;
};

Header.propTypes = {
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

export default Header;
