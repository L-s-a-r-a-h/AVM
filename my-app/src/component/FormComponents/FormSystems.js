import React, { Component } from 'react';
import '../styles/FormSystems.css';

export class FormSystems extends Component {
  //  const { data, handleChange } = useFormContext()
  //form page to set the main systems
  constructor(props) {
    super(props);
    this.state = {
      selectedSystem: '', // To store the selected system
      systemsList: [], // To store the list of selected systems
      systemOptions: [
        'Windows 10',
        'Windows 11',
        'Google Chrome',
        'Mozilla Firefox',
        'Microsoft Edge',
      ],
    };
  }

  handleChange = (e) => {
    this.setState({ selectedSystem: e.target.value });
  };

  handleAddSystem = () => {
    const { selectedSystem, systemsList } = this.state;
    if (selectedSystem) {
      // Add the selected system to the list if it's not empty
      this.setState(
        {
          selectedSystem: '', // Clear the selected value
          systemsList: [...systemsList, selectedSystem],
        },
        () => {
          // Pass the updated systems list to the parent component (Form)
          this.props.updateSelectedSystems(this.state.systemsList);
        }
      );
    }
  };

  handleRemoveSystem = (index) => {
    const { systemsList } = this.state;
    const updatedList = [...systemsList];
    updatedList.splice(index, 1); // Remove the selected system
    this.setState({ systemsList: updatedList }, () => {
      // Pass the updated systems list to the parent component (Form)
      this.props.updateSelectedSystems(this.state.systemsList);
    });
  };
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();

  }


  render() {
   
    const { selectedSystem, systemsList, systemOptions } = this.state;

    return (<div>
      <form className="form">
        <label>Specify main business systems, then click Add:</label>
        <select
          value={selectedSystem}
          onChange={this.handleChange}
          className="input"
        >
          <option value="">Select a system</option>
          {systemOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <input id="input"  className="input-box" onChange={this.handleChange} />
        <button
          type="button"
          onClick={this.handleAddSystem}
          className="button"
        >
          Add
        </button>
      </form>

      <table>
        <thead>
          <tr  className="businesssystem">
            
              <th>Business Systems</th>
            
          </tr>
        </thead>
        <tbody>
          {systemsList.map((system, index) => (
            <tr key={index}>
              <td>{system}</td>
              <td className="removeBtnField">
                
                  <button
                    type="button"
                    onClick={() => this.handleRemoveSystem(index)}
                    className="remove-button"
                  >
                    Remove
                  </button>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="button" onClick={this.continue} className="button">
        Next
      </button>
    </div>
    );
  }
}

export default FormSystems;
