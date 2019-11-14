/** @jsx jsx */
import { string } from "prop-types";
import styled from "@emotion/styled";
import { jsx, css, keyframes } from "@emotion/core";
import { variant } from "styled-system";

import { Check, XOctagon, AlertTriangle } from "react-feather";

import Flexbox from "../Flexbox";
import Box from "../Box";
import Text from "../Text";
import theme from "../../theme";

const fade = keyframes`
  from {opacity: 0}, 
  to {opacity: 1}
`;

const StyledFlexbox = styled(Flexbox)(
  variant({
    prop: "status",
    variants: {
      ...theme.alerts
    }
  })
);

const statusIcon = {
  success: <Check />,
  error: <XOctagon />,
  warning: <AlertTriangle />
};

const Alert = ({ message, status, icon, ...rest }) => {
  return (
    <StyledFlexbox
      role="alert"
      aria-live="assertive"
      status={status}
      css={css`
        animation: ${fade} 400ms;
      `}
      {...rest}
    >
      <Box mx="15px" aria-hidden="true">
        {!icon && statusIcon[status]}
        {icon && icon}
      </Box>
      <Text>{message}</Text>
    </StyledFlexbox>
  );
};

Alert.defaultProps = {
  status: "success",
  borderRadius: "3px",
  width: ["90%", 1 / 2, 1 / 3],
  icon: null
};

Alert.propsTypes = {
  status: string,
  icon: string,
  message: string.isRequired
};

export default Alert;
