/** @jsx jsx */
import { jsx, css } from "@emotion/core";
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

const StyledText = styled("p", {
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
    boxSizing: "border-box"
  },
  compose(
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

const Text = ({ truncate, ...rest }) => {
  return <StyledText css={truncate && truncated} {...rest} />;
};

Text.propTypes = {
  ...propTypes.space,
  ...propTypes.layout,
  ...propTypes.color,
  ...propTypes.typography,
  ...propTypes.background,
  ...propTypes.border,
  ...propTypes.position,
  ...propTypes.shadow
};

export default Text;
