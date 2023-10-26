
import React, { Component } from "react";
import { useForm } from "react-hook-form";
import FormSystems from "./FormSystems";
import FormPriority from "./FormPriority";

import OutputHosts from "../output/Output";
import FormAddresses from "./FormAddresses";


export class Form extends Component {
  constructor(props) {
    super(props)
    //IMPLEMENT OTHER JUNK HERE
    this.state = {
      page: 1,
      systemRank:[],
      selectedSystems: [], // To store selected systems
      hosts: [], // contain the IP address and the the priority
    };
  }

  componentDidMount() {
    const hostIP = [...new Set(this.props.props.map(item => item.Host))].filter(item => item);
    this.updateHostSystems(hostIP)
   
  }
//update the host IP
  updateHostSystems = (systems) => {
    this.setState({
      hosts: systems,
    });

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
    // Update selected systems in the state
    updateSystemRank = (systems) => {
      this.setState({
        systemRank: systems,
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

  render() {

    const { page: step, selectedSystems, systemName, hosts,systemRank } = this.state;
    const values = { systemName };
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
          updateSystemRank={this.updateSystemRank}
        />
        );
      case 3:
        return (
          <FormAddresses
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            hosts={hosts}
            selectedSystems={systemRank}    
            updateHostSystems={this.updateHostSystems}
          />
        );
      default:
        return (
          <p> ... </p>
        );
    }

  }
}

export default Form;
