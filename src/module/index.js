import React from "react";
import Box from "../lib/Box";
import Flexbox from "../lib/Flexbox";
import Text from "../lib/Text";
import Link from "../lib/Link";

const App = () => (
  <Flexbox dir="column" justify="center" align="center">
    <Text truncate width="200px">
      This is a long text that should be truncated.
    </Text>
    <Link href="https://plasma-ui.com" textDecoration="none" display="flex">
      This is a link
    </Link>
    <Box>Box 2</Box>
    <Box>Box 3</Box>
    <Box>Box 4</Box>
  </Flexbox>
);

export default App;
