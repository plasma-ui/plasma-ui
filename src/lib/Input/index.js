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
  color,
  background,
  layout,
  shadow,
  border,
  typography,
  position,
  variant,
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

const Input = styled("input", {
  shouldForwardProp
})(
  props => ({
    flexDirection: props.dir,
    justifyContent: props.justify,
    alignItems: props.align,
    willChange: props.willChange,
    transform: props.transform,
    cursor: props.cursor
  }),
  {
    boxSizing: "border-box",
    borderWidth: "1px",
    borderRadius: "3px",
    outline: "none"
  },
  compose(
    flexbox,
    space,
    color,
    background,
    layout,
    shadow,
    border,
    typography,
    position,
    variant({
      variants: {
        nude: {
          border: 0
        },
        floored: {
          border: 0,
          borderBottom: "1px solid silver",
          borderRadius: "1px"
        }
      }
    })
  )
);

Input.defaultProps = {
  type: "text",
  dir: "",
  justify: "",
  align: "",
  textDecoration: "",
  willChange: null,
  transform: null,
  borderStyle: "solid",
  borderColor: "silver",
  padding: "10px 12px",
  flex: "1",
  fontSize: "1rem",
  fontWeight: "300"
};

Input.propTypes = {
  type: string,
  cursor: string,
  dir: string,
  justify: string,
  align: string,
  willChange: string,
  textDecoration: string,
  transform: string,
  ...propTypes.flexbox,
  ...propTypes.space,
  ...propTypes.color,
  ...propTypes.background,
  ...propTypes.layout,
  ...propTypes.shadow,
  ...propTypes.border,
  ...propTypes.typography,
  ...propTypes.position,
  ...propTypes.variant
};

export default Input;
