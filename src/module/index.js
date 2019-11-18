import React from "react";
import Box from "../lib/Box";
import Flexbox from "../lib/Flexbox";

const App = () => (
  <Flexbox justify="flex-end" align="flex-start">
    <Box>Box 1</Box>
    <Box>Box 2</Box>
    <Box>Box 3</Box>
    <Box>Box 4</Box>
  </Flexbox>
);

export default App;
