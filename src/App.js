import React from "react";
import PropTypes from 'prop-types';

//1 Function Component
function App() {

  console.log('start App()');

  const dogs = [
    { name: "a", age: 1},
    { name: "b", age: 2},
    { name: "c", age: 3},
    { name: "123", age: "a"},    
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

//proptypesを用いた型チェック
Dog.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
}

export default App;
