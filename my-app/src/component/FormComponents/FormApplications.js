import useFormContext from "../../hooks/useFormContext"
import React, { Component } from 'react';

// form page for mapping the applications to the mian systems
export class FormApplications extends Component {

    
    continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();

  }
  
  render() {
    const { values, handleChange } = this.props;

    return(
<>

<p>Please select the applications used in each system</p>
<button type="button"  onClick={this.continue}>next 
        </button>
        
       < button type="button"  onClick={this.back}>back 
        </button>
</>
       
        
    )
 
   
    
  }
    
    
}
export default FormApplications