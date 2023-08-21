import React, { Component } from 'react';
import { useState } from "react";
import fileProcess from "../test/fileProcess"
import Papa from "papaparse";
import Form from './Form';
//import * as func from "../test/api";
import MenuBar from './MenuBar';

const allowedExtensions = ["csv"];
const Start = () => {
    // const navigate = useNavigate();
    const [data, setData] = useState('');
    const [result, setResult] = useState(false);
    // It state will contain the error when
    // correct file extension is not used
    const [message, setMessage] = useState("");

    // It will store the file uploaded by the user
    const [file, setFile] = useState("");
    const handleFileChange = (e) => {
        setMessage("");
        // Check if user has entered the file
        if (e.target.files.length) {
            const inputFile = e.target.files[0];

            // Check the file type, if incorrect show error message
            const fileExtension = inputFile?.type.split("/")[1];
            if (!allowedExtensions.includes(fileExtension)) {
                setMessage("Incorrect file type! Please select CSV file!");
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
            return setMessage("Select csv file");
        }
        const reader = new FileReader();
        //csv to  array

        reader.onload = async ({ target }) => {

            const csv = Papa.parse(target.result, { header: true });


            const parsedData = csv?.data;

            // process the file 
            let riskArr = fileProcess(parsedData);
            if (!riskArr) {
                return setMessage("csv file does not contain correct elements");
            }
            setData(riskArr);
            setResult(true);
            setMessage("upload Success!");
        }
        reader.readAsText(file);
    };



    return (
        <div> 
            <MenuBar/>   
        <div class="body">
            <div class="upload">
                <h3> start page.  </h3>
                <p>upload your vulnerabily report in csv file!!!</p>

                <div>
                    <input type="file" onChange={handleFileChange} />
                    <button onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
            </div>
            <div >
            <p class="message">{message}</p>
                </div>
            {/* <div class="results">
                {result && <Form props={data} />}
            </div> */}
        </div>
        </div>
    );
}


export default Start;