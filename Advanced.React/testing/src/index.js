import React from "react";
import ReactDOM from "react-dom";
import App from "components/App";
import Root from "Root";
//USING an HOC
ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.getElementById("root")
);
