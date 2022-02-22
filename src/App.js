import React from "react";

//1 Function Component
function App() {

  const myage=5;

  //propsを渡す
  return (    
      <React.Fragment> 
        <Dog name={"aaa"} age={10}/>
        <Dog name={"bbb"} age={myage}/>
        <Dog name={"ccc"} age={3}/>
      </React.Fragment>
  );
}

//propsを受け取る
const Dog = (props) => {
  return <div>dog {props.name} age:{props.age}</div>
}

export default App;
