//1 Function Component
// function App() {
//   return (
//       <h1>This is JSX</h1>
//   );

import React from "react";

// }
const App = () => {
  return React.createElement(
    "div",
    null,
    "test aaaa this is javascript..."
  );
}

//2 Class Component
// import React, { Component } from "react";
// class App extends Component {
//   render(){
//     return React.createElement(
//       "div",
//       null,
//       "test this is from javascript."
//     );
//   }
// }

export default App;
