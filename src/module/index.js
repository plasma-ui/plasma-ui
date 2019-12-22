import React, { useState, useEffect } from "react";
import Box from "../lib/Box";
import Flexbox from "../lib/Flexbox";
import Text from "../lib/Text";
import Heading from "../lib/Heading";
import Link from "../lib/Link";
import Button from "../lib/Button";
import Alert from "../lib/Alert";
import Dialog from "../lib/Dialog";
import Spacer from "../lib/Spacer";
import Banner from "../lib/Banner";
import Navbar from "../lib/Navbar";
import Drawer from "../lib/Drawer";
import { ThemeProvider } from "emotion-theming";
import theme from "../lib/theme";

const App = () => {
  const [isOpen, setisOpen] = useState(false);

  const toggleDialog = () => setisOpen(true);

  return (
    <ThemeProvider theme={theme}>
      <Banner justify="space-between" align="center">
        <Heading>Logo</Heading>
        <Navbar>
          <Link>Item 1</Link>
          <Link>Item 2</Link>
        </Navbar>
      </Banner>
      <Button
        variant="default"
        fontSize="1.2rem"
        p="10px"
        borderRadius="4px"
        onClick={toggleDialog}
      >
        Open Drawer
      </Button>
      <Drawer
        isOpen={isOpen}
        onDismiss={() => setisOpen(false)}
        placement="right"
      >
        <Button onClick={() => setisOpen(false)}>Close</Button>
        <Text>some text</Text>
        <Button>Another button</Button>
        <Button>Another button</Button>
      </Drawer>
      {/* <Dialog
        isOpen={isOpen}
        onDismiss={() => setisOpen(false)}
        animation="slide-down"
      >
        This is a dialog
      </Dialog> */}
      <Flexbox justify="center" align="center" flexWrap="wrap">
        <Text truncate width="200px">
          This is a long text that should be truncated.
        </Text>
        <Link href="https://plasma-ui.com" textDecoration="none" display="flex">
          This is a link
        </Link>

        <Button
          variant="green"
          fontSize="1.2rem"
          p="10px"
          borderRadius="4px"
          onClick={() => console.log("Clicked")}
        >
          Button
        </Button>

        <Button
          variant="red"
          fontSize="1.2rem"
          p="10px"
          borderRadius="4px"
          onClick={() => console.log("Clicked")}
        >
          Button
        </Button>

        <Button
          variant="yellow"
          fontSize="1.2rem"
          p="10px"
          borderRadius="3px"
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
        <Heading mx="0" my="0">
          Heading
        </Heading>
      </Flexbox>
    </ThemeProvider>
  );
};

export default App;
