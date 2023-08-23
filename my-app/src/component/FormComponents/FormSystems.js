//import useFormContext from "../../hooks/useFormContext"
import React, { Component } from 'react';

export class FormSystems extends Component {
  //  const { data, handleChange } = useFormContext()
//form page to set the main systems

continue = e => {
  e.preventDefault();
  this.props.nextStep();
};


    addList() {
        var input = document.getElementById('input').value;
    
        let list = document.getElementById("items");
    
        if (input) {
          let item = document.createElement("tr");
    
          let tData = document.createElement("td");
          tData.setAttribute("class", "systems");
          let val = document.createTextNode(input);
          tData.appendChild(val);
          item.appendChild(tData)
          let deleteButton = document.createElement("td");
          val = document.createTextNode("X");
          deleteButton.appendChild(val)
          deleteButton.addEventListener("click", function () {
            item.remove()
          })
          item.appendChild(deleteButton);
          list.appendChild(item)
        }
      }
    
    render() {
      const { values, handleChange } = this.props;

    return (<>
      <h3> Form.  </h3>
  
        <p><label>please specify main business systesms then click add:</label></p>

        <input id="input" /> <button onClick={this.addList} >add</button>
        <table>
          <thead>
            <th><label>Business Systems:</label></th>
          </thead>
          <tbody id="items">
          </tbody>
        </table>

        <button type="button"  onClick={this.continue}>next 
        </button>
  
    
    
    
    </>)
     }
}
export default FormSystems