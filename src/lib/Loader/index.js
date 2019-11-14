/** @jsx jsx */ jsx;
import { string } from "prop-types";
import { jsx, css, keyframes } from "@emotion/core";

import Box from "../Box";

const spin = keyframes`
  to {transform: rotate(360deg)}
`;

const Loader = ({ name, speed, size, color, thickness, ...rest }) => {
  switch (name) {
    case "spinner":
      return (
        <Box
          speed={speed}
          width={size}
          height={size}
          borderColor="rgba(0, 0, 0, 0.1)"
          borderStyle="solid"
          borderRadius="50%"
          borderWidth={thickness}
          borderTopWidth={thickness}
          borderTopColor={color}
          willChange="transform"
          {...rest}
          css={css`
            animation: ${spin} ${speed} infinite linear;
          `}
        />
      );
    default:
      break;
  }
};

Loader.defaultProps = {
  name: "spinner",
  size: "50px",
  speed: "1s",
  color: "blue",
  thickness: "4px"
};

Loader.propTypes = {
  name: string,
  size: string,
  speed: string,
  color: string,
  thickness: string
};

export default Loader;
