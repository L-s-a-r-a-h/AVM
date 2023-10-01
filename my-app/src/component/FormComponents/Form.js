import React, { Component } from 'react';
import FormSystems from './FormSystems';
import FormPriority from './FormPriority';
import FormApplications from './FormApplications';

export class Form extends Component {
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
    const { page: step } = this.state;
    this.setState({
      page: step + 1,
    });
  };

  prevStep = () => {
    const { page: step } = this.state;
    this.setState({
      page: step - 1,
    });
  };

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { page: step, selectedSystems, systemName } = this.state;
    const values = { systemName };

    switch (step) {
      case 1:
        return (
          <FormSystems
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
        return (
          <FormPriority
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
            selectedSystems={selectedSystems}
          />
        );
      case 3:
        return (
          <FormApplications
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      default:
        return <p>Default content</p>;
    }
  }
}

export default Form;
