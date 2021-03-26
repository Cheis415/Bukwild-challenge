import React, { useState } from "react";
import '../index.css';
import Header from "./Header";
import Routes from "./Routes";
import data from "../content"
import { BrowserRouter } from "react-router-dom";

/**
 * 
 * I initally provided the state with an external server using axios in a useEffect
 * hook, but decided to just import from js file for ease of deployment
 */

function App() {
  const [ jsonData ] = useState(data)

  if (!jsonData) return "loading";
   
  return (
    <BrowserRouter>
      <Header jsonData={jsonData} />
      <Routes jsonData={jsonData} />
    </BrowserRouter>
  );
}

export default App;

