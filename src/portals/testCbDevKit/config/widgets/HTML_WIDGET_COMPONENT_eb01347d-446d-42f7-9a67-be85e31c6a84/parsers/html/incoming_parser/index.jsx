import React from "react";
import ReactDOM from "react-dom";

class TestCbDevKit extends React.Component {
  render() {
    return <div>hello!!</div>;
  }
}

ReactDOM.render(
  <TestCbDevKit />,
  document.getElementById("TestCbDevKit-react-widget")
);
export default TestCbDevKit;
