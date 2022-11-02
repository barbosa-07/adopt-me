import React from "react";
import { createRoot } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt me!</h1>
      <Pet name="foo" animal="cat" breed="unknown" />
      <Pet name="bar" animal="dog" breed="unknown" />
      <Pet name="baz" animal="oul" breed="unknown" />
    </div>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
