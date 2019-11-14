import React from "react";
import styled from "@emotion/styled";
import propTypes from "@styled-system/prop-types";
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

import Navbar from "../Navbar";

const ReactDrawer = ({ children, ...props }) => {
  return <Navbar {...props}>{children}</Navbar>;
};

const Drawer = styled(ReactDrawer)(
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

Drawer.defaultProps = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "baseline",
  flexWrap: "nowrap",
  position: "fixed",
  right: 0,
  height: "100vh",
  width: "25%",
  px: "20px"
};

Drawer.propTypes = {
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

export default Drawer;
