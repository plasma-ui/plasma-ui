import styled from "@emotion/styled";
import propTypes from "@styled-system/prop-types";
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

const Button = styled("button")(
  {
    appearance: "button",
    cursor: "pointer"
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
  type: "button"
};

Button.propTypes = {
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
