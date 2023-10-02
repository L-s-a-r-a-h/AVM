import React, { useState } from 'react';
import Papa from 'papaparse';
import Form from './FormComponents/Form';
import fileProcess from "../test/fileProcess"
import { NavLink, useNavigate } from 'react-router-dom';
import './styles/Start.css';
import { useDropzone } from 'react-dropzone';
import MenuBar from './MenuBar';

const allowedExtensions = ['csv'];

const Start = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [result, setResult] = useState(false);
    const [message, setMessage] = useState('');
    const [uploadedFileName, setUploadedFileName] = useState('');

    const handleFileChange = (acceptedFiles) => {
        const file = acceptedFiles[0];
        setUploadedFileName(file.name);

        const reader = new FileReader();
        reader.onload = async ({ target }) => {
            const csv = Papa.parse(target.result, { header: true });
            const parsedData = csv?.data;

            let riskArr = fileProcess(parsedData);
            if (!riskArr) {
                return setMessage('CSV file does not contain correct elements');
            }

            setData(riskArr);
            setResult(true);
            setMessage('Upload success!');
        };

        reader.readAsText(file);
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop: handleFileChange,
        accept: '.csv',
        maxFiles: 1,
    });

    const handleSubmit = () => {
        if (!uploadedFileName) {
            return setMessage('Select a CSV file');
        }

        // Handle form submission here if needed
    };

    return (
        <div>
            <MenuBar />
            <div className="body">
                <div className="upload">
                    <h3>Upload page</h3>
                    <p>Upload your vulnerability report in a CSV file!!!</p>
                    <div className="dropzone-container">
                        <div {...getRootProps()} className="dropzone">
                            <input {...getInputProps()} />
                            {uploadedFileName ? (
                                <p>Uploaded file: {uploadedFileName}</p>
                            ) : (
                                <p>Drag & drop a CSV file here, or click to select one</p>
                            )}
                        </div>
                    </div>
                    <NavLink to="/OutputHosts" state={data}>
                        <button disabled={!uploadedFileName}> Results </button>
                    </NavLink>
                </div>
                <div className="results">
                    {result && <Form props={data} />}
                </div>
            </div>
        </div>
    );
};

export default Start;
