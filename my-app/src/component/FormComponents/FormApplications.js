import React, { Component } from 'react';

// form page for mapping the applications to the mian systems
export class FormApplications extends Component {


  continue = e => {
    e.preventDefault();
    //-----------------------------------------------------//
    //process form
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();

  }
  add = ()=>{

  console.log()
  }
  render() {
    const { selectedSystems, handleChange, values,apps } = this.props;
    console.log(this.props.apps)
    return (
      <div className="form-container">


        <p>Please select the applications used in each system</p>
        <form id="form">
          {/* {selectedSystems && selectedSystems.length > 0 ? (
            selectedSystems.map((system, index) => (
              <div key={index} className="system-priority">
                <label className="system-label">{system}</label>
                <select
                  className="system-select"
                  name={`${system}`}
                  value={values[`${system}-${index}`]}
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
          )} */}
               <button
          type="button"
          onClick={this.add}
          className="button"
        >
          Add
        </button>
        </form>

        <div className="button-container">
          <></>
          <button type="button" className="button back-button" onClick={this.back}>
            Back
          </button>
          <button type="button" className="button" onClick={this.continue}>
            Next
          </button>

        </div>
      </div>


    )



  }


}
export default FormApplications