import React from "react";
import { YellowBox, StatusBar } from "react-native";

import Routes from "./src/routes";

YellowBox.ignoreWarnings(["Unrecognized WebSocket"]);

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Routes />
    </>
  );
}
