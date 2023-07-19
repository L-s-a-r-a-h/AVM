
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import "./bodyStyles.css";

const Form=()=> {
    const { register, handleSubmit } = useForm();
    const [result, setResult] = useState("");
    
    const onSubmit = (data) => setResult(JSON.stringify(data));

    return (
        <div class = "body">
        <h3> Form.  </h3>
        <p>Next to each business system please rate on a scale of 1 to 5 the sensitivity and criticality of each system (1 being the lowest, 5 being the highest) Consider factors such as data confidentiality, system availability, and potential impact on the business if the system is compromised.					
    </p>
    <form onSubmit={handleSubmit(onSubmit)}>
    
      <p><label>Business Systems:   </label><input {...register("systems")} placeholder="System" /></p>
      <p><label>Score:   </label><input {...register("score")} placeholder="Source" /></p> 

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