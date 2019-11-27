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

const Button = styled("button", {
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
    appearance: "button"
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
        default: {
          color: "#FFFFFF",
          bg: "#3e64ff",
          border: 0
        },
        dashed: {
          borderStyle: "dashed",
          textShadow: "1px 1px 1px #d4d7d6"
        },
        green: {
          bg: "#5ABC3C",
          color: "#FFFFFF",
          border: 0
        },
        red: {
          bg: "#FF3535",
          color: "#FFFFFF",
          border: 0
        },
        yellow: {
          bg: "#FFE842",
          border: 0
        },
        plasma: {
          color: "#fff",
          // textShadow: "1px 1px 2px #18D3AF",
          background:
            "radial-gradient(#fff400, #e71919, #753A88, #8d5ac3, #100572, #000)",
          border: 0
        }
      }
    })
  )
);

Button.defaultProps = {
  type: "button",
  cursor: "pointer",
  dir: "",
  justify: "",
  align: "",
  textDecoration: "",
  willChange: null,
  transform: null
};

Button.propTypes = {
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

export default Button;
