//import useFormContext from "../../hooks/useFormContext"
import React, { Component } from 'react';
export class FormPriority extends Component {
   // const { systems, handleChange } = useFormContext()

   continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();

  }
  
//form  page  to set the priority of the systems
render() {
    const { values, handleChange } = this.props;

  return (<>
    <h3> Form.  </h3>
    <p>Next to each business system please rate on a scale of 1 to 5 the sensitivity and criticality of each system (1 being the lowest, 5 being the highest) Consider factors such as data confidentiality, system availability, and potential impact on the business if the system is compromised.
      </p>       
       <button type="button"  onClick={this.continue}>next 
        </button> <button type="button"  onClick={this.back}>back 
        </button>

  
  
  
  </>)
   }
 
    

          

}
export default FormPriority