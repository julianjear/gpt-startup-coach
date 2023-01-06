import logo from "./logo.svg";
import {
  Text,
  Heading,
  Image,
  Link,
  OrderedList,
  ListItem,
  HStack,
  Box,
  Input,
  Button,
  Textarea,
} from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Heading>Super Startup Coach</Heading>
        <Text>Input a challenge you are facing in your startup</Text>
        <Textarea
          resize="none"
          borderRadius="8px"
          w={["90%", "70%", "50%"]}
          h={"200px"}
          fontSize="20px"
          padding="8px"
        />
      </header>
    </div>
  );
}

export default App;
