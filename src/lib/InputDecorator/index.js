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

const InputDecorator = styled("input", {
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
    boxSizing: "border-box"
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
          bg: "transparent"
        },
        dashed: {
          borderStyle: "dashed",
          textShadow: "1px 1px 1px #d4d7d6"
        },
        blue: {
          color: "white",
          bg: "blue",
          border: 0
        },
        green: {
          bg: "green",
          color: "white",
          border: 0
        },
        red: {
          bg: "red",
          color: "white",
          border: 0
        },
        yellow: {
          bg: "yellow",
          border: 0
        }
      }
    })
  )
);

InputDecorator.defaultProps = {
  type: "text",
  dir: "",
  justify: "",
  align: "",
  textDecoration: "",
  willChange: null,
  transform: null,
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "silver",
  borderRadius: "3px",
  padding: "10px 12px",
  flex: "1",
  fontSize: "1rem",
  fontWeight: "300"
};

InputDecorator.propTypes = {
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

export default InputDecorator;
