import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home";

const App = () => {
  return (
    <React.Fragment>
      <center>
        <h1>Welcome To My first React Application</h1>
      </center>
      <Home />
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
