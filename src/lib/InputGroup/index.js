import React from "react";
import styled from "@emotion/styled";
import { string } from "prop-types";
import propTypes from "@styled-system/prop-types";

import Flexbox from "../Flexbox";

const StyledFlexbox = styled(Flexbox)`
  box-sizing: border-box;
  input {
    border: 0;
  }
`;

const InputGroup = ({
  children,
  border,
  borderWidth,
  borderStyle,
  borderColor,
  ...rest
}) => (
  <StyledFlexbox
    border={border}
    borderWidth={borderWidth}
    borderStyle={borderStyle}
    borderColor={borderColor}
    {...rest}
  >
    {children}
  </StyledFlexbox>
);

InputGroup.defaultProps = {
  padding: "0 7px",
  display: "flex",
  align: "center",
  border: "1px solid blue",
  borderRadius: "3px",
  outline: "none"
};

InputGroup.propTypes = {
  cursor: string,
  dir: string,
  justify: string,
  align: string,
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

export default InputGroup;
