import React, { Component } from "react";
import { connect } from 'react-redux'
import { Link, useParams } from 'react-router-dom' 
import { Field, reduxForm} from 'redux-form'

import { getEvent, deleteEvent, putEvent } from '../action'

class EventShow extends Component{

  constructor(props){
    console.log('EventShow constractor.' + props.match);
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
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

  async onDeleteClick(){
    //let params = useParams();
    //console.log('onDeleteClick: ' + (params));
    await this.props.deleteEvent("14");    
    //this.props.history.push('/');
  }

  async onSubmit(values){
    console.log("onSubmit start ...");
    await this.props.postEvent(values);
    console.log("in onSubmit : " + JSON.stringify(this.props));
    //これが動かない
    //this.props.history.push('/');    
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
            <div><Link to="/">Cancel</Link></div>
            <div><Link to="/" onClick={this.onDeleteClick} >Delete</Link></div>
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

const mapDispatchToProps = ({ deleteEvent });

export default connect(null, mapDispatchToProps)(
  reduxForm({form: 'eventShowForm', validate})(EventShow)
  );

