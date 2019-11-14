import styled from "@emotion/styled";
import propTypes from "@styled-system/prop-types";
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

const Header = styled("h1")(
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

Header.propTypes = {
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
