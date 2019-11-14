import React, { useState } from "react";
import styled from "@emotion/styled";
import propTypes, { propType } from "@styled-system/prop-types";
import shouldForwardProp from "@styled-system/should-forward-prop";
import { Square, CheckSquare } from "react-feather";
import {
  color,
  space,
  size,
  position,
  shadow,
  variant,
  compose
} from "styled-system";

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

const NativeCheckbox = ({ label, checked, ...rest }) => (
  <input
    type="checkbox"
    role="checkbox"
    aria-checked={checked}
    aria-labelledby={!!label ? `${label}` : null}
    style={{
      border: "0",
      clip: "rect(0 0 0 0)",
      clippath: "inset(50%)",
      height: "1px",
      margin: "-1px",
      overflow: "hidden",
      padding: "0",
      position: "absolute",
      whitespace: "nowrap",
      width: "1px"
    }}
    {...rest}
  />
);
const CheckboxContainer = ({ label, ...props }) => {
  const [checked, setChecked] = useState(null);

  const handleChange = e => {
    setChecked(e.target.checked);
  };

  return (
    <StyledLabel>
      {!!label && <span>{label}</span>}
      {!checked && <Square aria-hidden="true" {...props} />}
      {checked && <CheckSquare aria-hidden="true" {...props} />}
      <NativeCheckbox onChange={handleChange} checked={checked} />
    </StyledLabel>
  );
};

const Checkbox = styled(CheckboxContainer)(
  {
    cursor: "pointer"
  },
  compose(
    color,
    space,
    size,
    position,
    shadow,
    variant
  )
);

Checkbox.defaultProps = {
  size: "20px"
};

Checkbox.propTypes = {
  ...propTypes.color,
  ...propTypes.space,
  ...propTypes.size,
  ...propTypes.position,
  ...propTypes.shadow,
  ...propTypes.variant
};

export default Checkbox;
