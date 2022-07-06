import React from "react";
import "./App.scss";
import Head from "./components/head";
import Main from "./components/main";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Head />
        <Main />
      </header>
    </div>
  );
}

export default App;
