import React from "react";
import "./App.scss";
import Head from "./components/head";
import Main from "./components/main";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Head />
        <Main />
      </div>
    </div>
  );
}

export default App;
