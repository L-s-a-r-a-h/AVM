import React, { Component } from 'react';
import '../styles/FormPriority.css';

class FormPriority extends Component {
  continue = (e) => {
    e.preventDefault();
    this.handleAddScore()
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();

  }
  handleAddScore() {

    var form = document.getElementById('form');
    var data = new FormData(form);
    let list=[];
    for (var [key, value] of data) {
      list.push([key, value]);
    }
      this.props.updateSystemRank(list);
 
    
  }


  //form  page  to set the priority of the systems
  render() {
  
    const { selectedSystems, handleChange, values } = this.props;
    return (<>
      <div className="form-container">
        <h3 className="form-heading">Form</h3>
        <p className="form-instructions">
          Next to each business system, please rate on a scale of 1 to 5 the
          sensitivity and criticality of each system (1 being the lowest, 5
          being the highest). Consider factors such as data confidentiality,
          system availability, and potential impact on the business if the system
          is compromised.
        </p>


        <form id="form">
          {selectedSystems && selectedSystems.length > 0 ? (
            selectedSystems.map((system, index) => (
              <div key={index} className="system-priority">
                <label className="system-label">{system}</label>
                <select
                  className="system-select"
                  name={`${system}`}
                >
                  <option value="1">1 (Lowest)</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5 (Highest)</option>
                </select>
              </div>
            ))
          ) : (
            <p>No selected systems to display.</p>
          )}
        </form>

        <div className="button-container">
          <button type="button" className="button back-button" onClick={this.back}>
            Back
          </button>
          <button type="button" className="button" onClick={this.continue}>
            Next
          </button>

        </div>
      </div>

    </>)
  }





}
export default FormPriority