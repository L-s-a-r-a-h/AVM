
import React, { Component } from "react";
import { useForm } from "react-hook-form";
import FormSystems from "./FormSystems";
import FormApplications from "./FormApplications";
import FormPriority from "./FormPriority";
import { useLocation } from "react-router-dom"

import Output from "../Output";


export class Form extends Component {
constructor(props){
  super(props)


}
  state = {
    page: 1,
    selectedSystems: [], // To store selected systems
    systemName: '',
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
  updateScore = (scores) => {
    this.setState({ selectedSystems: scores })
  }

  setSystems = (data) => {
    this.setState({ systems: data })
  }
  render() {
    const { page: step, selectedSystems, systemName } = this.state;
    const values = { systemName };
        const apps = this.props;

    console.log(this.props);
  

    switch (step) {
      case 1: return (<FormSystems
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
        return (<FormPriority
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
            selectedSystems={selectedSystems}
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
