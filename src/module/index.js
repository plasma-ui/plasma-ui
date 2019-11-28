import React from "react";
import Box from "../lib/Box";
import Flexbox from "../lib/Flexbox";
import Text from "../lib/Text";
import Link from "../lib/Link";
import Button from "../lib/Button";
import Alert from "../lib/Alert";
import { ThemeProvider } from "emotion-theming";
import theme from "../lib/theme";

const App = () => (
  <ThemeProvider theme={theme}>
    <Flexbox justify="center" align="center" flexWrap="wrap">
      <Text truncate width="200px">
        This is a long text that should be truncated.
      </Text>
      <Link href="https://plasma-ui.com" textDecoration="none" display="flex">
        This is a link
      </Link>
      <Button
        backgroundColor="blue"
        variant=""
        fontSize="1.2rem"
        p="10px"
        borderRadius="4px"
        onClick={() => console.log("Clicked")}
      >
        Button
      </Button>

      <Button
        backgroundColor="blue"
        variant=""
        fontSize="1.2rem"
        p="10px"
        borderRadius="4px"
        onClick={() => console.log("Clicked")}
      >
        Button
      </Button>

      <Button
        backgroundColor="blue"
        variant=""
        fontSize="1.2rem"
        p="10px"
        borderRadius="4px"
        onClick={() => console.log("Clicked")}
      >
        Button
      </Button>

      <Box bg="black" size="70px" />
      <Box bg="white" size="70px" />
      <Box bg="grey" size="70px" />
      <Box bg="red" size="70px" />
      <Box bg="yellow" size="70px" />
      <Box bg="green" size="70px" />
      <Box bg="blue" size="70px" />
      <Box bg="navy" size="70px" />
      <Box bg="aqua" size="70px" />
      <Box bg="teal" size="70px" />
      <Box bg="olive" size="70px" />
      <Box bg="maroon" size="70px" />
      <Box bg="fuchsia" size="70px" />
      <Box bg="#E365C1" size="70px" />
      <Box bg="purple" size="70px" />
      <Box bg="silver" size="70px" />

      <Alert message="Alert" status="success" />
      <Alert message="Alert" status="error" />
      <Alert message="Alert" status="warning" />
    </Flexbox>
  </ThemeProvider>
);

export default App;
