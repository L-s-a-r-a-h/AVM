
import React, { Component } from "react";
import { useForm } from "react-hook-form";
import FormSystems from "./FormSystems";
import FormApplications from "./FormApplications";
import FormPriority from "./FormPriority";
import { useLocation } from "react-router-dom"

import Output from "../Output";


export class Form extends Component {
  
  state = {
    page: 1,
    selectedSystems: [], // To store selected systems
    systemName: '',
    apps: this.props
  };

  // Function to add a selected system
  addSelectedSystem = (system) => {
    this.setState((prevState) => ({
      selectedSystems: [...prevState.selectedSystems, system],
    }));
  };

  // Function to remove a selected system
  removeSelectedSystem = (index) => {
    this.setState((prevState) => ({
      selectedSystems: prevState.selectedSystems.filter((_, i) => i !== index),
    }));
  };

  // Update selected systems in the state
  updateSelectedSystems = (systems) => {
    this.setState({
      selectedSystems: systems,
    });
  };

  nextStep = () => {
    const { page } = this.state;
    this.setState({
      page: page + 1,
    });
  };

  prevStep = () => {
    const { page } = this.state;
    this.setState({
      page: page - 1,
    });
  };
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };
  updateScore = (scores)=>{
  this.setState({ selectedSystems: scores})
  console.log(this.props);
 
}

  setSystems = (data) => {
   this.setState({systems:data})
  }
  render() {
    const { page: step, selectedSystems, systemName ,apps} = this.state;
    const values = {systemName};

    switch (step) {
      case 1: return ( <FormSystems
        nextStep={this.nextStep}
        handleChange={this.handleChange}
        values={values}
        selectedSystems={selectedSystems}
        addSelectedSystem={this.addSelectedSystem}
        removeSelectedSystem={this.removeSelectedSystem}
        updateSelectedSystems={this.updateSelectedSystems}
      />
      );
      case 2:
        return (          <FormPriority
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          values={values}
          selectedSystems={selectedSystems}
          updateScore={this.updateScore}
        />
      );
    case 3:
      return (
        <FormApplications
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          values={values}
          apps={apps}
        />
      );
    default:
      return <p>Default content</p>;
    }
  }
}

export default Form;
