import styled from "@emotion/styled";

import Box from "../Box";

const Flexbox = styled(Box)();

Flexbox.defaultProps = {
  display: "flex",
  dir: "row",
  align: "center"
};

export default Flexbox;
