import React from "react";

//1 Function Component
function App() {
  const greeting = "aaa bbb ccc";

  //{}の中にJavascriptが記述できる
  //const dom = <h1 className="foo">This is JSX {greeting}</h1>;
  //const dom2 = <input type="text" onClick={() => { console.log('test'); }} />;  
  return (    
      <React.Fragment> 
        <label htmlFor="bar">test:</label>
        <input type="text" onClick={() => { console.log('test'); }} />
        <Dog/>
        <Dog/>
        <Dog/>                
      </React.Fragment>
  );
}

const Dog = () => {
  return <div>dog</div>
}
// import React from "react";

// }
// const App = () => {
//   return React.createElement(
//     "div",
//     null,
//     "test aaaa this is javascript..."
//   );
// }

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
