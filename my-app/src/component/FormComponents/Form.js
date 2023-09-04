
import React, { Component  } from "react";
import { useForm } from "react-hook-form";
import FormSystems from "./FormSystems";
import FormApplications from "./FormApplications";
import FormPriority from "./FormPriority";
import { useLocation } from "react-router-dom"

import Output from "../Output";


export class Form extends Component {


  state = {
    page: 1,
    systemName: "",
    systemRank: ''
  //   systemName: [{
  //     systemRank: '',
  //     systemApplications: ['']
  // }]

  };

  nextStep = () => {
    const { page: page } = this.state;
    this.setState({
      page: page + 1
    });
  };
  prevStep = () => {
    const { page: page } = this.state;
    this.setState({
      page: page - 1
    });
  };
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };
  render() {
    const { page: step } = this.state;
    const {systemName} = this.state;
    const values = {systemName};

    switch (step) {
      case 1: return ( <FormSystems
      
        nextStep={this.nextStep}
        handleChange={this.handleChange}
        values={values}
      />
);
      case 2:
        return (<FormPriority
        nextStep={this.nextStep}
        prevStep={this.prevStep}
        handleChange={this.handleChange}
        values={values}/>);
        case 3:
          return (<FormApplications 
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          values={values}/>);
      default:
        return (
          (console.log('default'))
        )
       
    }
  }
}

export default Form;