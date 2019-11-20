import React from "react";
import Box from "../lib/Box";
import Flexbox from "../lib/Flexbox";
import Text from "../lib/Text";

const App = () => (
  <Flexbox justify="center" align="center">
    <Text truncate>This is a long text that should be truncated.</Text>

    <Box>Box 2</Box>
    <Box>Box 3</Box>
    <Box>Box 4</Box>
  </Flexbox>
);

export default App;
