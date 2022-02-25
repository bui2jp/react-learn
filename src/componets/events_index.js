import React, { Component } from "react";
import { connect } from 'react-redux'

import { readEvents } from '../action'

import _ from 'lodash'

class EventIndex extends Component{
  constructor(props){
    console.log(props);
    super(props);
  }

  componentDidMount(){
    console.log('componentDidMount start');
    //apiをコールしてリストを取得する
    this.props.readEvents();
  }

  renderEvents(){
    console.log('start renderEvents...')
    return _.map(this.props.events, event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ))
  }
  render(){
    console.log(this.state + " : in render()");
    const props = this.props;
    return (
        <React.Fragment>
          <table>
            <thead>
              <th>th 111</th>
              <th>th 222</th>
              <th>th 333</th>
            </thead>
            <tbody>
              {this.renderEvents()}
            </tbody>
          </table>
        </React.Fragment>
      );
  }
}
const mapStateToProps = state => ({ events: state.events });
// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement()),  
// });
const mapDispatchToProps = ({ readEvents });

export default connect(mapStateToProps, mapDispatchToProps)(EventIndex);
//export default App;
