import './App.css';
import React, { useState } from 'react';
import { Route, Routes ,BrowserRouter, Switch} from "react-router-dom";

import Login from './component/Login';
import Home from './component/Home';
import Start from './component/Start';
import Form from './component/FormComponents/Form';
import Output from './component/Output';
import OutputHosts from './component/output/OutputHosts';

function App() {

  // const [token, setToken] = useState();

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }

  return (

    <Routes>
        <Route exact path='/' element ={<Home/>}/>
        <Route path='Home' element={<Home/>}> </Route>
        <Route path='Login' element={<Login/>}> </Route>
      
                <Route path='Start' element={<Start/>}> </Route>
                <Route path='Form' element={<Form/>}> </Route>
                <Route path='Output' element={<Output/>}> </Route>
                <Route path='OutputHosts' element={<OutputHosts/>}></Route>
    </Routes>
  );
}

export default App;
