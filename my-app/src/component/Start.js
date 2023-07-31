import React, { Component } from 'react';
import { useState } from "react";
import fileProcess from "../test/fileProcess"
import Papa from "papaparse";
import Form from './Form';


const allowedExtensions = ["csv"];
const Start = () => {
    // const navigate = useNavigate();
    const [data, setData] = useState('');
    const [result, setResult] = useState(false);
    // It state will contain the error when
    // correct file extension is not used
    const [error, setError] = useState("");

    // It will store the file uploaded by the user
    const [file, setFile] = useState("");
    const handleFileChange = (e) => {
        setError("");
        // Check if user has entered the file
        if (e.target.files.length) {
            const inputFile = e.target.files[0];

            // Check the file type, if incorrect show error message
            const fileExtension = inputFile?.type.split("/")[1];
            if (!allowedExtensions.includes(fileExtension)) {
                setError("Incorrect file type! Please select CSV file!");
                return;
            } else {
                // If input type is correct set the state
                setFile(inputFile);
            }


        }
    };
    const handleSubmit = () => {
    
        console.log("click submit");
        if (!file) {
            return setError("Select csv file");
        }
        const reader = new FileReader();
        //csv to  array
        reader.onload = async ({ target }) => {
            const csv = Papa.parse(target.result, { header: true });
            const parsedData = csv?.data;
            // process the file 
            let dat = fileProcess(parsedData);
            if (!dat) {
                return setError("csv file does not contail correct elements");
            }
            setData(dat);
            setResult(true);
        }
        reader.readAsText(file);




    };



    return (
        <div class="body">
            <h3> start page.  </h3>
            <p>upload your vulnerabily report in csv file!!!</p>

            <div>
                <p class="error">{error}</p>
                <input type="file" onChange={handleFileChange} />
                <button onClick={handleSubmit}>
                    Submit
                </button>

            </div>

            <div class="results">
                {result && <Form props={data} />}
            </div>
        </div>
    );
}


export default Start;