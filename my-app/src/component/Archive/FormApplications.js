

import React, { Component } from 'react';

// form page for mapping the applications to the mian systems
export class FormApplications extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      systemsScore: []
    };
  }

  continue = e => {
    e.preventDefault();
    console.log(this.props);
    //-----------------------------------------------------//
    //process form
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();

  }
  getValues(){

    //this.props.apps
  }
  render() {
    const { selectedSystems, handleChange, values, apps } = this.props;
 
    const uniqueArray = apps.filter((value, index) => {
      const _value = JSON.stringify(value);
      return index === apps.findIndex(apps => {
        return JSON.stringify(apps) === _value;
      });
    });
    console.log(uniqueArray)

    return (
      <div className="form-container">


        <p>Please the main system used for each application</p>
        <form id="form">
          {uniqueArray && uniqueArray.length > 0 ? (
            uniqueArray.map((item,index) => (
              <div key={index} className="system-priority">
                <label className="system-label">{item[0]} {item[1]}</label>
                <select
                  className="system-select"
                  name={`${index}`}
                  value={values[`${index}`]}
                >
                  {selectedSystems && selectedSystems.length > 0 ? (
                    selectedSystems.map((system, i) => (
                      <option value={selectedSystems}>{system}</option>
                    ))
                  ) : (
                    <p>Nothing to display.</p>
                  )}
                </select>
              </div>
            ))
          ) : (
            <p>Nothing to display.</p>
          )}
        
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