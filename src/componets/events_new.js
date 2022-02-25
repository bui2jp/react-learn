import React, { Component } from "react";
import { connect } from 'react-redux'
import { Link } from 'react-router-dom' 
import { Field, reduxForm} from 'redux-form'

import { postEvent } from '../action'

class EventNew extends Component{

  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  renderField(field){
    const { input, label, type, meta:{ touched, error } } = field;
    
    // console.log("label " + label);
    // console.log("type " + type);
    console.log("touched " + touched);    
    console.log("error " + error);    

    return(
      <div>
        <input {...input} placeholder={label} type={type} ></input>
        { <span>error msg : </span>}        
        { touched && error && <span>{error}</span>}
      </div>
    )
  }

  async onSubmit(values){
    console.log("onSubmit start ...");
    await this.props.postEvent(values);
    console.log("in onSubmit : " + JSON.stringify(this.props));
    //これが動かない
    this.props.history.push('/');    
  }

  render(){
    const { handleSubmit, pristine, submitting } = this.props;
    console.log("submitting : " + submitting);

    return (
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div>
            <Field label="title" name='title' type="text" component={this.renderField}></Field>
          </div>
          <div>
            <Field label="body" name='body' type="text" component={this.renderField}></Field>
          </div>

          <div>
            <input type="submit" value="Submit" disabled={pristine || submitting}></input>
            <Link to="/">Cancel</Link>
          </div>
        </form>
      );
  }
}

//const mapDispatchToProps = ({ postEvent });
const validate = values => {
  console.log("start validate..." + JSON.stringify(values));
  const errors = {};

  if (!values.title) errors.title = "enter a  (title)";
  if (!values.body) errors.body = "enter a  (body)";

  console.log(errors);
  return errors;
}

const mapDispatchToProps = ({ postEvent });

export default connect(null, mapDispatchToProps)(
  reduxForm({form: 'eventNewForm', validate})(EventNew)
  );
//export default App;
