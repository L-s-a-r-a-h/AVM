import React, { Component } from 'react';
import  { useState } from "react";
class Start extends Component {
    
    state = {
        selectedFile: null
    };

    // On file select (from the pop up)
    onFileChange = event => {

        // Update the state
        this.setState({ selectedFile: event.target.files[0] });

    };

    // On file upload (click the upload button)
    onFileUpload = () => {

        console.log(this.state.selectedFile);

        // Send formData object code here   
        //--------------------------------- 
        if (this.state.selectedFile.type == "text/csv"){
           console.log("OK");
        }else{
            console.log("NO OK");
        }

    };

    // content displayed after file upload is complete
    fileData = () => {

        if (this.state.selectedFile) {
            if (this.state.selectedFile.type == "text/csv") {
                return (<div>
                    <h2>File Details:</h2>
                    <p>File Name: {this.state.selectedFile.name}</p>

                    <p>File Type: {this.state.selectedFile.type}</p>
                </div>
                )
            } else {
                return (
                    <div>
                        <br />
                        <h4 class="errorText">incorrect file type!! </h4>
                    </div>
                );

            }

        } 
    };

    render() {

        return (
            <div class="body">
                <h3> start page.  </h3>
                <p>upload your vulnerabily report in csv file!!!</p>
                <div>
                    <input type="file" onChange={this.onFileChange} />
                    <button onClick={this.onFileUpload}>
                        Submit
                    </button>
                </div>
                {this.fileData()}
            </div>
        );
    }
}

export default Start;