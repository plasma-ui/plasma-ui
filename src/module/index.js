import React from "react";
import Box from "../lib/Box";
import Flexbox from "../lib/Flexbox";
import Text from "../lib/Text";
import Link from "../lib/Link";
import Button from "../lib/Button";
import { ThemeProvider } from "emotion-theming";
import theme from "../lib/theme";

const App = () => (
  <ThemeProvider theme={theme}>
    <Flexbox dir="column" justify="center" align="center">
      <Text truncate width="200px">
        This is a long text that should be truncated.
      </Text>
      <Link href="https://plasma-ui.com" textDecoration="none" display="flex">
        This is a link
      </Link>
      <Button
        backgroundColor="purple.11"
        variant=""
        fontSize="1.2rem"
        p="10px"
        borderRadius="4px"
        onClick={() => console.log("Clicked")}
      >
        Button
      </Button>
      <Box>Box 2</Box>
      <Box>Box 3</Box>
      <Box>Box 4</Box>
    </Flexbox>
  </ThemeProvider>
);

export default App;
