import React, { Component } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import OutputHosts from "../output/OutputHosts";


// form page for mapping the applications to the main systems
export class FormAddresses extends Component {
  
  continue = e => {
    e.preventDefault();
    this.handleAddressLink()
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  handleAddressLink() {

    var form = document.getElementById('form');
    var data = new FormData(form);
    let list=[];
    for (var [host, value] of data) {
      list.push([host, value]);
    }
    console.log(list)
    this.props.updateHostSystems(list);
  }

  render() {
    const { selectedSystems, hosts } = this.props;
    return (
      <div className="form-container">


        <p>Please enter the ip addressess ued by the system</p>
      
        <form id="form">
          {hosts && hosts.length > 0 ? (
            hosts.map((host, index) => (
              <div key={index} className="system-priority">
                <label className="system-label">{host}</label>
                <select
                  className="system-select"
                  name={`${host}`}
               
                >
                  {selectedSystems && selectedSystems.length > 0 ? (
                    selectedSystems.map((system, i) => (
                      <option value={system[1]}>{system[1]}</option>
                    ))
                  ) : (
                    <p>Nothing to display.</p>
                  )}
                </select>
              </div>
            ))
          ) : (
            <p>No selected systems to display.</p>
          )}
        </form>


        <div className="button-container">
          <></>
          <button type="button" className="button back-button" onClick={this.back}>
            Back
          </button>
          <button type="button" className="button" onClick={this.continue}>
            Results
          </button>

        </div>
      </div>


    )



  }


}
export default FormAddresses