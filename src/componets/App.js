import React, { Component } from "react";
import { connect, connet } from 'react-redux'

import { increment, decrement } from '../action'

class App extends Component{
  constructor(props){
    console.log(props);
    super(props);
  }
  render(){
    console.log(this.state + " : in render()");
    const props = this.props;
    return (
        <React.Fragment>
          <div>my value test { props.value }</div>
          <button onClick={props.increment}>+1</button>
          <button onClick={props.decrement}>-1</button>
        </React.Fragment>
      );
  }
}
const mapStateToProps = state => ({ value: state.count.value });
// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement()),  
// });
const mapDispatchToProps = ({ increment, decrement });

export default connect(mapStateToProps, mapDispatchToProps)(App);
//export default App;
