import React from "react";

//1 Function Component
function App() {

  const dogs = [
    { name: "a", age :1},
    { name: "b", age :2},
    { name: "c", age :3},        
    { name: "a", age :1},
    { name: "b", age :2},
    { name: "c", age :3},            
  ]

  //propsを渡す
  return (    
      <React.Fragment> 
        {
          dogs.map( (value, index) => {
            return <Dog name={value.name} age={value.age} key={index}/>
          })
        }
      </React.Fragment>
  );
}

//propsを受け取る
const Dog = (props) => {
  return <div>dog {props.name} age:{props.age}</div>
}

export default App;
