import React, { Component } from "react";

//1 Function Component
const App = () => (<MyCounter></MyCounter>);

class MyCounter extends Component{
  constructor(props){
    console.log(props);
    super(props);
    this.state = { 
      count: 0,
      nama: "aaa",
      remark: "aaa"      
    }
  }
  render(){
    console.log(this.state + " : in render()");
    return (
        <React.Fragment>
          <div>my counter test { this.state.count }</div>
          <button onClick={this.handlePlusButton}>+1</button>
          <button onClick={this.handleMinusButton}>-1</button>
        </React.Fragment>
      );
  }

  handlePlusButton = () => {
    console.log("handle Plus Button. " + this.state.count);
    this.setState({count: this.state.count + 1})
  }
  handleMinusButton = () => {
    console.log("handle Minus Button. " + this.state.count);
    this.setState({count: this.state.count - 1})
  }  
}

export default App;
