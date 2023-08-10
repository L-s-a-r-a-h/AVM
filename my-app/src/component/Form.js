
import React, { useState } from "react";
import { useForm } from "react-hook-form";
//import * as funct from "../test/priority";
import "./bodyStyles.css";

const Form = (args) => {
  //props is the filtered vulnerability results
console.log(args.props);
let arr =  args.props;
  const { register, handleSubmit } = useForm();
  // 'result' is the submitted data
  const [result, setResult] = useState("");

  //data for testing, replace later with the list of affected appplications 
  let appName = [['google', 'chrome'], ['fedoraproject', 'fedora'], ['asdasd', 'erere']];

  // 'data' is from the form
  const onSubmit = (data) => {
    setResult(JSON.stringify(data));
    //sort the cve based on the critical systems
    //funct.assessPriority({riskList:arr, score:data});
  }



  return (
    <div >
      <h3> Form.  </h3>
      <p>Next to each business system please rate on a scale of 1 to 5 the sensitivity and criticality of each system (1 being the lowest, 5 being the highest) Consider factors such as data confidentiality, system availability, and potential impact on the business if the system is compromised.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <table>
          <thead>
            <th><label>Business Systems:</label></th>
            <th><label>Score:</label></th>
          </thead>
          <tbody>
            {
              appName.map((val, i) =>
                <tr> <td>{val[1]}</td>
                  <td><select {...register(val[1])} placeholder="score" >

                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                  </select></td>
                </tr>
              )
            }
          </tbody>
        </table>
        <p><label>Other Systems please specify:</label><input {...register("other")} /></p>
        <label>Select the Operating System installed on Endpoint Devices:</label><select {...register("userOS")}>
          <option value="Windows">Windows</option>
          <option value="MacOS">MacOS</option>
          <option value="Linux">Linux</option>
          <option value="other">Other</option>
        </select>
        <p>{result}</p>
        <input type="submit" />
      </form>
    </div>
  );
}

export default Form;