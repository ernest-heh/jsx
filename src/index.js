// 1. Import the React and ReactDOM Libraries
import React from "react";
import ReactDOM from "react-dom/client";
// Import App component
import MyApp from "./App";

// 2. Get a Reference to the div with ID root
const element = document.getElementById("root");

// 3. Tell React to take control of that element
const root = ReactDOM.createRoot(element);

// 4. Show the component on the screen
root.render(<MyApp />);
